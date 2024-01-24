let body = document.body;
let div = document.getElementById('cHola');

let oX, oY, x, y;

function calculateOffsets() {
    let bodyR = body.getBoundingClientRect();
    oX = (bodyR.right - bodyR.left) / 2;
    oY = (bodyR.bottom - bodyR.top) / 2;
}

function setPosition(x, y) {
    div.style.left = x + oX + "px";
    div.style.top = y + oY + "px";
}

function updatePosition(e) {
    x = e.clientX - oX + window.scrollX;
    y = e.clientY - oY + window.scrollY;
    setPosition(x, y);
}

body.addEventListener('mousemove', updatePosition);
window.addEventListener('scroll', updatePosition);

// Recalculate offsets when the window is resized
window.addEventListener('resize', calculateOffsets);

calculateOffsets();
setPosition(0, 0);
