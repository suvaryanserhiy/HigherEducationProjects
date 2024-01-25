let velocity = 0;
let span = document.querySelector('span');

document.addEventListener("keydown", changeVelocity);

function changeVelocity(ev) {
    if (ev.key === 'ArrowUp' && velocity < 120) {
        velocity++;
    } else if (ev.key === 'ArrowDown' && velocity > 0) {
        velocity--;
    }
    span.textContent = velocity;
}
