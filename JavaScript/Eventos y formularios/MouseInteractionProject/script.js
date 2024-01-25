const div = document.getElementById('box');

div.addEventListener('mouseenter', changeColorWhenEnter);
div.addEventListener('mouseleave', changeColorWhenLeave);
div.addEventListener('mousedown', changeColorWhenMouseDown);
div.addEventListener('mouseup', changeColorWhenEnter);
div.addEventListener('contextmenu', preventContextMenu);

function changeColorWhenEnter() {
    div.style.backgroundColor = 'green';
}

function changeColorWhenLeave() {
    div.style.backgroundColor = 'transparent';
}

function changeColorWhenMouseDown(ev) {
    if (ev.button === 0) {
        div.style.backgroundColor = 'red';
    } else if (ev.button === 2) {
        div.style.backgroundColor = 'blue';
    }
}

function preventContextMenu(event) {
    event.preventDefault(); // Evitar que aparezca el menú contextual al hacer clic derecho
}
