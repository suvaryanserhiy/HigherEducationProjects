window.onload = function (){
    // Ejercicio 4

    // let p = document.createElement('p');
    // let contentP = document.createTextNode('Hola gatito');
    // p.appendChild(contentP);
    //
    // document.body.appendChild(p)




    // let article = document.getElementById('articulo');
    //
    // let parrafo1 = document.createTextNode('Hola gatito')
    // let parrafo2 = document.createTextNode('Hola minino')
    //
    // let boldText = document.createElement('strong');
    //
    // boldText.appendChild(parrafo2);
    //
    // article.appendChild(parrafo1);
    // article.appendChild(boldText);

    // Ejercicio 5

    // let logo = document.getElementById('logo-header');
    //
    // logo.parentNode.removeChild(logo);

    // Ejercicio 6

    let a = document.querySelectorAll("a");
    for (let aElement of a) {
        aElement.href = 'https://www.google.com/';
    }

    a[2].href = 'https://site.educa.madrid.org/ies.lazarocardenas.colladovillalba/';


}