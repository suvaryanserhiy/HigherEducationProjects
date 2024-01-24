document.addEventListener('DOMContentLoaded', function() {

    let numberFunc = function (){
        let inputNumber = parseInt(prompt("Introduce un numero:"));

        while (isNaN(inputNumber)) {
            alert("Debe introducir un numero");
            inputNumber = parseInt(prompt("Introduce un numero:"));
        }
        return inputNumber;
    };
    let number = numberFunc();

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

    changeNumber.addEventListener('click', function () {
        number = numberFunc();
    });

    doubleButton.addEventListener('click', function() {
        visualizeNumber( number, function() {
            return `El doble del ${number} es ${number * 2}`;
        });
    });

    tripleButton.addEventListener('click', function() {
        visualizeNumber(number, function() {
            return `El triple del ${number} es ${number * 3}`;
        });
    });

    function visualizeNumber(number,callback) {
        alert(callback());
    }
});
