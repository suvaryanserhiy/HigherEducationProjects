document.addEventListener('DOMContentLoaded', function () {

    const cargandoDiv = document.getElementById('cargando');
    const imagenes = document.querySelectorAll('img');

    imagenes.forEach(function (imagen) {
        imagen.addEventListener('load', function () {

            if (imagenesCargadas()) {

                cargandoDiv.classList.add('ocultar');
            }
        });
    });


    function imagenesCargadas() {
        for (const imagen of imagenes) {
            if (!imagen.complete) {
                return false;
            }
        }
        return true;
    }
});
