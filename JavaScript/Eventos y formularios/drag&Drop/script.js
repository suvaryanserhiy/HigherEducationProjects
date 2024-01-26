// CONSTANTS
const BOX1 = document.querySelector('.box1');
const BOX2 = document.querySelector('.box2');

// EVENT LISTENERS
BOX1.addEventListener('drag', handleDragBox1);
BOX1.addEventListener('dragend', handleDragEndBox1);
BOX2.addEventListener('dragenter', handleDragEnterBox2);
BOX2.addEventListener('dragleave', handleDragLeaveBox2);
BOX2.addEventListener('dragover', handleDragOverBox2);
BOX2.addEventListener('drop', handleDropIntoBox2);

// EVENT HANDLERS

// Handle drag event on BOX1
function handleDragBox1() {
    BOX1.style.opacity = '0.5';
}

// Handle drag end event on BOX1
function handleDragEndBox1() {
    BOX1.style.opacity = '1';
}

// Handle drag enter event on BOX2
function handleDragEnterBox2() {
    BOX2.style.backgroundColor = 'red';
}

// Handle drag leave event on BOX2
function handleDragLeaveBox2() {
    BOX2.style.backgroundColor = 'transparent';
}

// Handle drag over event on BOX2
function handleDragOverBox2(ev) {
    ev.preventDefault();
}

// Handle drop event into BOX2
function handleDropIntoBox2() {
    BOX1.parentNode.removeChild(BOX1);
    BOX2.innerText = 'Lo has conseguido!';
    BOX2.style.backgroundColor = 'yellow';
}
