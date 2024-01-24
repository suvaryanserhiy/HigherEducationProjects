window.onload = function (){

    //Ejercicio 1
    let  element = document.getElementsByClassName("titulonav")

    console.info('Ejercicio1');
    console.log(element.length);


    //Ejercicio 2

    let nav = document.querySelectorAll('#nav');
    console.log('Ejercicio2');
    console.log(nav.length);


    //Ejercicio 3

    let ejemplo = document.querySelector('#ejemplo')

    console.log('Ejercicio3');
    console.log(`Valor del "id" -> ${ejemplo.getAttribute('id')}`);
    console.log(`Valor del "data-atributo-sin-valor" -> ${ejemplo.getAttribute('data-atributo-sin-valor')}`);
    console.log(`Valor del "data-atributo-que-no-existe" -> ${ejemplo.getAttribute('data-atributo-que-no-existe')}`);

    //Ejercicio 4


    ejemplo.setAttribute('data-atributo-sin-valor','ahora tengo valor');
    ejemplo.setAttribute('data-atributo-que-no-existe','ahora existo');

    //Logs para comprobar Ejercicio4
    // console.log(`Valor del "id" -> ${ejemplo.getAttribute('id')}`);
    // console.log(`Valor del "data-atributo-sin-valor" -> ${ejemplo.getAttribute('data-atributo-sin-valor')}`);
    // console.log(`Valor del "data-atributo-que-no-existe" -> ${ejemplo.getAttribute('data-atributo-que-no-existe')}`);



    //Ejercicio 5


    //script for remove attribute class

    // document.querySelectorAll('.cuerporec').forEach(element => {
    //     element.removeAttribute('class');
    // });


    document.querySelectorAll('.cuerporec').forEach(element => {
        element.setAttribute('class', 'cuerporec')
    })


    // scsript for toggle attribute class

    // document.querySelectorAll('.cuerporec').forEach(element => {
    //     element.toggleAttribute('class')
    // })



    //Ejercicio 6
    console.log("Ejercicio 6");
    let edad = document.getElementById('edad');

    if (edad) {
        for (let { name, value } of edad.attributes) {
            console.log(`${name} -> ${value}`);
        }
    } else {
        console.log('"Edad no tiene atributos"');
    }


    //Ejercicio 7


    //using convertor HTMLCollection to array

    let links = document.getElementsByTagName('a');
    Array.from(links).forEach(link => {
        link.style.backgroundColor = 'grey';
    });

    //using spread operator

    [...links].forEach(link => {
        link.style.backgroundColor = 'grey';
    });

    //remove backgroung color
    [...links].forEach(link => {
        link.style.backgroundColor = '';
    })


    //Ejercicio 8

    Array.from(links).forEach(link => {
        link.className = 'claseDeEnlace'
    })




}

