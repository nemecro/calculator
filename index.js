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




