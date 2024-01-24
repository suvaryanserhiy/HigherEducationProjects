Project Documentation: Question and Answer Tracker

This project is a simple web application that allows users to input questions and their corresponding answers. The application dynamically updates and displays a list of these questions and answers. Additionally, users have the ability to remove individual items from the list through a double-click event.
Project Structure:

    index.html: The main HTML file containing the form and display containers.
    styles.css: The CSS file for styling the HTML elements.
    script.js: The JavaScript file containing the logic for the web application.
# Code Structure:

## 1. Constants:

        form: Represents the HTML form element with the ID 'formulario'.
        
        convisu: Represents the HTML element with the ID 'convisu'.

        conform: Represents the HTML element with the ID 'conform'.
   
        ul: Represents an unordered list created dynamically for displaying questions and answers.

## 2. Functions:
### createListItem(qA):

       Creates a list item for a given question and answer pair (qA).
       Adds a double-click event listener to the list item for removal.
       Removes the list item from the display and the questionsAnswers array.

### clearInputFields():

    Clears the input fields within the form.

### updateDisplay():

    Clears existing content in the ul (unordered list).
    Creates and appends list items for each question and answer pair from the questionsAnswers array.

## 3. Variables:
   ### questionsAnswers:

       An array to store question and answer pairs.

## 4. Event Listener:
   ### form Submission Event:

*   Prevents the default form submission behavior.
*   Retrieves values from the 'question' and 'answer' input fields.
*   Validates that both question and answer are provided.
*   Adds the question and answer pair to the questionsAnswers array.
*   Clears input fields.
*   If there are five question and answer pairs:
     * The list (convisu) is visible, hiding the form (conform).
     * Updates the display using the updateDisplay function