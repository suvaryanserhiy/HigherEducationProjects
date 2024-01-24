window.onload = function () {
    const body = document.body;
    const ol = document.createElement('ol');

    const elements = [
        {texto: 'Blue', cambiar: 'no', borrar: 'si'},
        {texto: 'Green', cambiar: 'si', borrar: 'no'},
        {texto: 'Black', cambiar: 'no', borrar: 'si'},
    ];

    elements.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element.texto;
        li.setAttribute('data-cambiar-borrar', `${element.cambiar}-${element.borrar}`);  // Combine attributes

        li.addEventListener('click', function () {
            const [cambiar, borrar] = li.getAttribute('data-cambiar-borrar').split('-');
            if (cambiar === 'si') {
                li.style.color = element.texto;
            }
            if (borrar === 'si') {
                li.remove();
            }
        });

        ol.appendChild(li);
    });

    body.appendChild(ol);
};
