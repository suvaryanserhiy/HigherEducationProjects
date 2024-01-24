# Project Documentation: Sorteo App

## 1. Introduction:

The Sorteo App is a simple application that interacts with the user to determine if they are eligible for a discount based on the total purchase amount. The app generates a random discount percentage and day of the month, providing a personalized message to the user.

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

###    Function Definitions:

        sorteo():
        The main function that initiates the app. It prompts the user for their name and total purchase amount, then calls the checkValue function.

        obtenerUltimoDiaDelMes():
        A function to obtain the last day of the month using the current date.

        checkValue(name, value):
        The main logic function that calculates a random discount and day of the month based on the total purchase amount. It generates a personalized message for the user.

## 4. Program Flow:

   The program starts by calling the sorteo() function.<br>
   Users are prompted to enter their name and total purchase amount.<br>
   The checkValue function is then called to determine if the user is eligible for a discount.<br>
   A personalized message is displayed on the document.

## 5. Functions and Logic:

   **sorteo() Function:**
   Gets user inputs for name and total purchase amount.
   Calls the checkValue function with the provided inputs.

   **obtenerUltimoDiaDelMes() Function:**
   Retrieves the last day of the month using the current date.

   **checkValue(name, value) Function:**
   Checks the total purchase amount.
   If less than or equal to $50, a thank-you message is displayed.
   If more than $50, a random discount percentage and day of the month are calculated, and a personalized message is displayed.

## 6. Usage:

   Open the HTML file in a web browser.
   Enter your name and total purchase amount when prompted.
   Receive a personalized message based on the total purchase amount
