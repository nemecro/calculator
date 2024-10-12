let number1 = null;
let number2 = null;
let operator = null;

let cleared = true;

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
        return undefined;
    }
    return parseFloat(a) / parseFloat(b);
}

const operate = function(num1, operator, num2){
    switch (operator){
        case '+': 
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            return 'invalid operator';
    }
}

// check if the negative sign was applied to the number
let negative = false;
// check if the first operator was pressed
let firstOperator = false;
// add event listener for each button
buttons.forEach(button => {
    // each button when clicked does something
    button.addEventListener('click', () => {
        // based on the button clicked, do something
        // if operand is clicked
        if (button.classList.contains('operand')){
            // default setting or when AC pressed - override the zero


            if (cleared){
                calculatorDisplay.textContent = button.textContent;
                cleared = false;
            } else {
                calculatorDisplay.textContent += button.textContent;
            }
        }

        // MISC functions section
        // clear the display
        if (button.textContent == 'AC'){
            cleared = true;
            calculatorDisplay.textContent = 0;
        }

        if (button.textContent == '+ / -'){
            //
            if (negative == false){
                calculatorDisplay.textContent = '-' + calculatorDisplay.textContent;
                negative = true;
            } else {
                console.log('remove -');
                calculatorDisplay.textContent = calculatorDisplay.textContent.substring(1, calculatorDisplay.textContent.length)
                negative = false;
            }
        }

        // OPERATORs section
        if (button.classList.contains('operator')){
            // only make operations when cleared was overwritten
            if (!cleared){

            }
        }

    })
})


