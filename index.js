let number1 = null;
let number2 = null;
let operator = null;

const calculatorDisplay = document.querySelector('#calculator-display');
let buttons = document.querySelectorAll('button');

const add = function(a, b){
    return parseFloat(a) + parseFloat(b);
}

const subtract = function(a, b){
    return parseFloat(a) - parseFloat(b);
}

const multiply = function(a, b){
    return parseFloat(a) * parseFloat(b);
}

const divide = function(a, b){
    if (b == 0){
        return 'ERROR';
    }
    return parseFloat(a) / parseFloat(b);
}

const operate = function(num1, operator, num2){
    switch (operator){
        case '+': 
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'ERROR';
    }
}

// const operators = ['+', '-', '*', '/']

let cleared = true;
const reset = function(){
    number1 = null;
    number2 = null;
    operator = null;
    decimalPressed = false;
    firstOperator = true;
    negative = false;
    negativeFirst = true;
}
// check if the negative sign was applied to the number
let negative = false;
// setting the first negative
let negativeFirst = true;
// check if the first operator was pressed
let firstOperator = true;
// check if the decimal was pressed
let decimalPressed = false;
// add event listener for each button
buttons.forEach(button => {
    // each button when clicked does something
    button.addEventListener('click', () => {
        // based on the button clicked, do something
        // if operand is clicked
        if (button.classList.contains('operand')){
            // check for error
            if (calculatorDisplay.textContent == 'ERROR'){
                calculatorDisplay.textContent = button.textContent;
                return 0;
            }
            // default setting or when AC pressed - override the zero
            if (cleared){
                // CHECK IF . PRESSED
                if (button.textContent == '.'){
                    calculatorDisplay.textContent += button.textContent;
                    decimalPressed = true;
                } else {
                    calculatorDisplay.textContent = button.textContent;
                }
                cleared = false;
            // IF NOT CLEARED
            } else {
                // WAS DECIMAL PRESSED
                if (button.textContent == '.'){
                    // WAS IT PRESSED BEFORE
                    if (!decimalPressed){
                        calculatorDisplay.textContent += button.textContent;
                        decimalPressed = true;
                    }
                // ANYTHING ELSE PRESSED? 
                } else {
                    calculatorDisplay.textContent += button.textContent;
                }
            }


        }

        // MISC functions section
        // clear the display
        if (button.textContent == 'AC'){
            cleared = true;
            reset();
            calculatorDisplay.textContent = '0';
        }

        // C button
        function remove(arr, removed){
            switch(removed){
                case '.':
                    decimalPressed = false;
                    break;
                case '+' || '-' || '*' || '/':
                    firstOperator = true;
                    arr.pop();
                    break;
                case ' ':
                    removed = arr.pop();
                    remove(arr, removed);
            }
        }
        if (button.textContent == 'C'){
            let displayArr = calculatorDisplay.textContent.split('');
            let removed = displayArr.pop();
            remove(displayArr, removed);
            if (displayArr.length < 1){
                cleared = true;
                reset();
                calculatorDisplay.textContent = '0';
            } else {
                calculatorDisplay.textContent = displayArr.join('');
            }
        }

        if (button.textContent == '+ / -'){
            //
            if (negative == false){
                // if setting the first negative
                if (negativeFirst){
                    calculatorDisplay.textContent = '-' + calculatorDisplay.textContent;
                    negative = true;
                // if setting the second negative
                } else {
                    let displayArr = calculatorDisplay.textContent.split(' ');
                    displayArr[displayArr.length - 1] = `(${displayArr[displayArr.length - 1] * (-1)})`;
                    calculatorDisplay.textContent = displayArr.join(' ');
                }
            } else {
                calculatorDisplay.textContent = calculatorDisplay.textContent.substring(1, calculatorDisplay.textContent.length)
                negative = false;
            }
        }

        // OPERATORs section
        if (button.classList.contains('operator')){
            // CHECK IF IT IS THE FIRST
            if (firstOperator){
                if (button.textContent == '='){
                    return 0;
                }
                // add the space here so I can split it into an array
                // SET CLEARED INTO FALSE in any case
                cleared = false;
                firstOperator = false;
                calculatorDisplay.textContent += ` ${button.textContent} `;
                negativeFirst = false;
            } else {
                let arrFirstPart = calculatorDisplay.textContent.split(' ');
                number1 = arrFirstPart[0];
                operator = arrFirstPart[1];
                number2 = arrFirstPart.slice(arrFirstPart.indexOf(operator) + 1)[0];
                if (number2.includes('(')){
                    number2 = number2.replace('(', '');
                    number2 = number2.replace(')', '');
                }
                let result = operate(number1, operator, number2);
                // fix error when user either types two operators when the calculator is reset 
                // or types one operand and then two operators instead of a single operand
                if (result == 'ERROR' || isNaN(result)){
                    calculatorDisplay.textContent = 'ERROR';
                    reset();
                    return 0;
                }
                reset();
                if (result != 'ERROR'){
                    if (!Number.isInteger(result)){
                        result = result.toFixed(2);
                        decimalPressed = true;
                    }
                }
                if (result < 0){
                    negative = true;
                }
                // DISTINGUISH BETWEEN SECOND OPERATOR
                switch(button.textContent){
                    case '=':
                        calculatorDisplay.textContent = result;
                        break;
                    default:
                        calculatorDisplay.textContent = `${result} ${button.textContent} `;
                        firstOperator = false;
                        arrFirstPart = calculatorDisplay.textContent.split(' ');
                        number1 = arrFirstPart[0];
                        operator = arrFirstPart[1];
                }
            }
        }
    })
})

let allowed = [];
buttons.forEach(button => {
    allowed.push(button.textContent)
})

document.addEventListener('keydown', keyPressed);
function keyPressed (e){
    if (allowed.includes(e.key) || e.key == 'Enter' || e.key == 'Backspace'){
        let pressed = e.key;
        if (pressed == 'Enter'){
            pressed = '=';
        } else if (pressed == 'Backspace'){
            pressed = 'C';
        }
        // click event on button that matches the key
        buttons.forEach(button => {
            if (button.textContent == pressed){
                button.click();
            }
        })
    }
}
