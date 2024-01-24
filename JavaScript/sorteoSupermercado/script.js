sorteo();

//main function to run an app
function sorteo(){

    let nombreCliente = prompt('Introduzca el nombre del cliente: ');
    let totalCompra = parseFloat(prompt(`Introduzca el total de la compra de ${nombreCliente}`));
    if (isNaN(totalCompra) || totalCompra <= 0) {
        alert("Entrada no válida. Por favor, introduce un número válido para el total de la compra.");
        return;
    }
    checkValue(nombreCliente,totalCompra);


}

// Función para obtener el último día del mes
function obtenerUltimoDiaDelMes() {
    const fechaActual = new Date();
    const mesSiguiente = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0); // create an actual date (year, month)
    return mesSiguiente.getDate(); // return that date
}

//logic of a main function, uses to calculate random number and check conditions
function checkValue(name, value){

    const ultimoDia = obtenerUltimoDiaDelMes(); // create an Object with actual date


    if (value <= 50){
        document.write(`¡Gracias por su compra, ${name}`); // print in document
    }
    if (value > 50){

        let descuntoAplicado = Math.floor(Math.random() * 25) + 1;// get a random number between 1 and 25
        let diaDescuento = Math.floor(Math.random() * ultimoDia) + 1; // get a random number between 1 and last day of month

        document.write(`El proximo dia ${descuntoAplicado} del mes, tendras un descuento del ${diaDescuento}%. Te esperamos, ${name}!`);

    }
}