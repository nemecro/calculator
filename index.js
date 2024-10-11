let number1;
let number2;
let operator;

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


