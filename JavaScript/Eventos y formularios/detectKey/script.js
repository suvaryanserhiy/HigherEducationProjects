document.addEventListener('keydown', function (ev) {
    if (ev.altKey && ev.key === 'F12') {
        // Alt + F12 was pressed, add your code to change the background image here
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/random")';
    }
});
