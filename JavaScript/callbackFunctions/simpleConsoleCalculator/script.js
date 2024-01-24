let numero1 = parseInt(prompt('Introduce el primer numero: '));
let operation = prompt('Introduce la operacion: ');
let numero2 = parseInt(prompt('Introduce el segundo numero: '));



switch (operation) {
    case '+':
        realizeOperation(numero1, numero2, sum);
        break;
    case '-':
        realizeOperation(numero1, numero2, subtract);
        break;
    case '*':
        realizeOperation(numero1, numero2, multiply);
        break;
    case '/':
        realizeOperation(numero1, numero2, divide);
        break;
    default:
        console.log('Operación no válida');
}


function realizeOperation(x,y,operation){
    console.log(operation(x,y));
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
