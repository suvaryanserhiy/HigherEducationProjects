document.addEventListener('DOMContentLoaded', () => {

    let number = getNumber();

    const container = document.createElement('div');
    document.body.appendChild(container);

    const doubleButton = createButton('Calculate Double', () => visualizeNumber(number, doubleNumber));
    container.appendChild(doubleButton);

    const tripleButton = createButton('Calculate Triple', () => visualizeNumber(number, tripleNumber));
    container.appendChild(tripleButton);

    const changeNumber = createButton('Cambiar el numero', () => number = getNumber());
    container.appendChild(changeNumber);
});

const getNumber = () => {
    let number = parseInt(prompt("Introduce un numero:"));

    while (isNaN(number)) {
        alert("Debe introducir un numero");
        number = parseInt(prompt("Introduce un numero:"));
    }

    return number;
};

const visualizeNumber = (number, callback) => {
    alert(callback(number));
};

const doubleNumber = number => `El doble del ${number} es ${number * 2}`;

const tripleNumber = number => `El triple del ${number} es ${number * 3}`;

const createButton = (text, clickHandler) => {
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
};
