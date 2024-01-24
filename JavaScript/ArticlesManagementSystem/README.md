# Project Documentation: Articles Management System

## 1. Introduction:

This project implements a simple Articulos Management System that allows users to perform various operations related to managing articles. The system is built in JavaScript and executed in a web browser.

## 2. HTML Structure:

The HTML file includes a basic structure with a script reference to the script.js file.

### html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
        <script src="script.js"></script>
    </head>
    <body>
    
    </body>
    </html>

## 3. JavaScript Implementation:

###    Global Variables:

   **articulosMap:** A Map object to store instances of the Articulo class. <br>
   **BENEFICIO:** A constant representing the benefit percentage.

###    Function Definitions:

        mostrarMenu():
        Displays a menu allowing the user to perform different operations such as Altas (Add), Bajas (Delete), Modificaciones (Modify), Listado (List), and Salir (Exit).

        Articulo(descripcion, precioBase, iva):
        Constructor function for creating instances of the Articulo class. It includes a method calcularPrecioVenta() to calculate the selling price.

        altas():
        Adds a new article to the system after taking necessary input and validating the data.

        bajas():
        Deletes an article based on the provided code after validating its existence.

        listado():
        Displays a list of articles along with their details, including calculated selling prices.

        modificar():
        Modifies the base price of an existing article after validating the input.

        validateCodigo(codigo):
        Validates the article code using a regular expression.

        validatePrecio_IVA(number):
        Validates the price and IVA using a regular expression.

## 4. Program Flow:

   The program starts by calling the mostrarMenu() function. <br>
   Users can choose from various options to manage articles. <br>
   The system utilizes a Map (articulosMap) to store and manipulate articles. <br>
   Validation functions ensure that the user inputs correct data. <br>
   Articles are created, modified, or deleted based on user choices.

## 5. Usage:

   Open the HTML file in a web browser.
   Follow the prompts in the displayed menu to perform different operations