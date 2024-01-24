const articulosMap = new Map();
const BENEFICIO = 10;


// Iniciar la aplicación mostrando el menú
mostrarMenu();

function mostrarMenu() {
    let opcion;
    do {

        opcion = parseInt(prompt(`
            1.Altas
            2.Bajas
            3.Modificaciones
            4.Listado
            5.Salir
            Opción (1-5): `
        ));

        switch (opcion) {
            case 1:
                altas();
                break;
            case 2:
                bajas();
                break;
            case 3:
                modificar();
                break;
            case 4:
                listado();
                break;
            case 5:
                alert("Saliendo del programa. ¡Hasta luego!");
                break;
            default:
                alert("Opción inválida. Inténtalo de nuevo.");
        }
    } while (opcion !== 5);
}
//Creacio del objeto Articulo
function Articulo(descripcion, precioBase, iva) {

    this.descripcion = descripcion;
    this.precioBase = precioBase;
    this.iva = iva;

    this.calcularPrecioVenta = function () {
        const margen = (BENEFICIO / 100) * this.precioBase;
        return this.precioBase + this.iva + margen;
    };
}

function altas() {

    // ask and validate codigo
    let codigo = prompt("Introduce el código del artículo:");
    while (!validateCodigo(codigo)){
        alert('Error codigo');
        codigo = prompt('Introduzca su codigo: ');
    }
    let descripcion = prompt("Introduce la descripción del artículo:");

    // ask and validate precio base
    let precioBase = parseFloat(prompt("Introduce el precio base del artículo:"));
    while (!validatePrecio_IVA(precioBase)){
        alert("Error precio");
        precioBase = parseFloat(prompt('Introduzca precio base: '));
    }
    // ask and validate IVA
    let IVA = parseFloat(prompt("Introduce el IVA del artículo:"));
    while (!validatePrecio_IVA(IVA)){
        alert('Error IVA');
        IVA = parseFloat(prompt('Introduzca IVA:'));
    }

    // Crear instancia de Articulo
    const nuevoArticulo = new Articulo(descripcion, precioBase, IVA);

    // Agregar al mapa
    articulosMap.set(codigo, nuevoArticulo);
}

function bajas(){
    // ask and validate codigo
    let codigo = prompt("Introduce el código del artículo:");
    while (!validateCodigo(codigo)){
        alert('Error codigo');
        codigo = prompt('Introduzca su codigo: ');
    }
    if (articulosMap.has(codigo)){
        articulosMap.delete(codigo);
    }
}

function listado(){
    let articulo = articulosMap.forEach((articulo,codigo) =>{
        const precioVenta = articulo.calcularPrecioVenta();
        console.info(`Codigo: ${codigo}, Descripcion: ${articulo.descripcion}, Precio de Venta:: ${precioVenta.toFixed(2)}`);
    });
}
function modificar(){
    let codigo = prompt("Introduce el código del artículo:");
    while (!validateCodigo(codigo)){
        alert('Error codigo');
        codigo = prompt('Introduzca su codigo: ');
    }
    if (!articulosMap.has(codigo)){
        alert(`No existe un artículo con el código ${codigo}.`);
        return;
    }
    let precioBase = parseFloat(prompt("Introduce el nuevo precio base del artículo:"));
    while (!validatePrecio_IVA(precioBase)){
        alert("Error precio");
        precioBase = parseFloat(prompt('Introduce el nuevo precio base del artículo: '));
    }
    const articulo = articulosMap.get(codigo);

    articulo.precioBase = precioBase;


}
//VALIDACIONES

function validateCodigo(codigo){
    let regExp = /[\d\w]+$/ // any digit any word character
    return regExp.test(codigo);
}
function validatePrecio_IVA(number){
    let regExp = /^([1-9]\d*([.,])\d*|0?([.,])\d*[1-9]\d*|[1-9]\d*)$/gm
    return regExp.test(number);
}

