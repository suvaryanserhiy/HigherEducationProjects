// Objeto para gestionar la lista de la compra
const listaCompra = {
    lista: new Set(),

    // Método Necesito
    necesito: function (descripcion) {
        if (!this.lista.has(descripcion)) {
            this.lista.add(descripcion);
            console.log(`"${descripcion}" añadido a la lista.`);
        } else {
            console.log(`"${descripcion}" ya está en la lista.`);
        }
    },

    // Método Comprado
    comprado: (function () {
        return function (descripcion) {
            if (this.lista.has(descripcion)) {
                this.lista.delete(descripcion);
                console.log(`"${descripcion}" eliminado de la lista.`);
            } else {
                console.log(`"${descripcion}" no está en la lista.`);
            }
        };
    })(),

    // Método Listado
    listado: function () {
        console.log("Elementos en la lista:");
        this.lista.forEach((elemento) => {
            console.log(elemento);
        });
    }
};

// Función para mostrar el menú
function mostrarMenu() {
    console.log(`
    LISTA DE LA COMPRA

    (A)ñadir elemento
    (B)orrar elemento
    (V)isualizar lista
    (S)alir
    Elija opción:`);
}

// Bucle principal
let opcion;
do {
    mostrarMenu();
    opcion = prompt("Elija una opción:\n (A)ñadir elemento\n (B)orrar elemento\n (V)isualizar lista\n (S)alir").toUpperCase();

    switch (opcion) {
        case 'A':
            let elementoNecesito = prompt("Introduzca la descripción: ");
            listaCompra.necesito(elementoNecesito);
            break;
        case 'B':
            let elementoComprado = prompt("Introduzca la descripción: ");
            listaCompra.comprado(elementoComprado);
            break;
        case 'V':
            listaCompra.listado();
            break;
        case 'S':
            console.log("Saliendo del programa. ¡Hasta luego!");
            break;
        default:
            console.log("Opción inválida. Inténtelo de nuevo.");
    }
} while (opcion !== 'S');
