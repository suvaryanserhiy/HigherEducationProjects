# Detect Key Project Documentation

## Introduction

The "Detect Key" project is a simple web page that allows users to change the background image by pressing the Alt + F12 key combination. The project is implemented using HTML, CSS, and JavaScript.
Features

    Detects the Alt + F12 key combination.
    Changes the background image of the webpage when Alt + F12 is pressed.
    Provides a user-friendly message to inform users about the key combination.

## Files

### HTML

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>detectKey</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <div>
        <p>Pulsa Alt + F12 para cambiar la imagen de fondo</p>
    </div>
    <script src="script.js"></script>
    </body>
    </html>

### JavaScript

    document.addEventListener('keydown', function (ev) {
    if (ev.altKey && ev.key === 'F12') {
    // Alt + F12 was pressed, change the background image
    document.body.style.backgroundImage = 'url("https://source.unsplash.com/random")';
    }
    });

### CSS

    body {
    background-color: #ffe4b5;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    }
    
    div {
    text-align: center;
    font-size: 50px;
    }

### Usage

    Open the index.html file in a web browser.
    Press the Alt + F12 key combination.
    Observe the change in the background image of the webpage.

### Note

    Ensure that the Alt + F12 key combination is not already reserved by the browser or operating system for other functionalities, as it might interfere with the intended behavior of the project.