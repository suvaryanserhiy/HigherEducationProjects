const secretNumber = Math.floor(Math.random() * 100) + 1; // Generar un número secreto entre 1 y 100
let trys = 0; // variable para contar los intentos
let guess; // variable de adivinanza
do {
    guess = parseInt(prompt("Adivina el número secreto (entre 1 y 100): "));
    if (!isNaN(guess) ){ //si numero NO es Not a Number
        trys++;

        if (guess === secretNumber) {
            console.log(`¡Felicidades! Adivinaste el número secreto (${secretNumber}) en ${trys} intentos.`);
        } else if (guess < secretNumber) {
            console.log("El número secreto es mayor. Intenta de nuevo.");
        } else {
            console.log("El número secreto es menor. Intenta de nuevo.");
        }
    }else{
        console.log('Tienes que introducir un numero')
    }

} while (guess !== secretNumber);

console.log("Gracias por jugar.");