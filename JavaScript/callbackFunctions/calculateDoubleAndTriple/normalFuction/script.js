document.addEventListener('DOMContentLoaded', function() {

    let number = getNumber();

    const container = document.createElement('div');
    document.body.appendChild(container);

    const doubleButton = document.createElement('button');
    doubleButton.textContent = 'Calculate Double';
    container.appendChild(doubleButton);

    const tripleButton = document.createElement('button');
    tripleButton.textContent = 'Calculate Triple';
    container.appendChild(tripleButton);

    const changeNumber = document.createElement('button');
    changeNumber.textContent = 'Cambiar el numero';
    container.appendChild(changeNumber);

    changeNumber.addEventListener('click', function (){
        number = getNumber();
    })

    doubleButton.addEventListener('click', function() {
        visualizeNumber(number, doubleNumber);
    });

    tripleButton.addEventListener('click', function() {
        visualizeNumber(number, tripleNumber);
    });
});

function getNumber(){
    let number = parseInt(prompt("Introduce un numero:"));

    while (isNaN(number)) {
        alert("Debe introducir un numero");
        number = parseInt(prompt("Introduce un numero:"));
    }

    return number;
}

function visualizeNumber(number, callback) {
    alert(callback(number));
}

function doubleNumber(number) {
    return `El doble del ${number} es ${number * 2}`;
}

function tripleNumber(number) {
    return `El triple del ${number} es ${number * 3}`;
}
