document.addEventListener("DOMContentLoaded", function () {
    // Constants for elements
    const form = document.getElementById('formulario');
    const convisu = document.getElementById('convisu');
    const conform = document.getElementById('conform');
    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';

    // Function to create list item and handle removal
    function createListItem(qA) {
        const li = document.createElement('li');
        li.textContent = `Pregunta: ${qA.id}\n Respuesta: ${qA.value}`;

        // Add double-click event listener to remove the item
        li.addEventListener('dblclick', function () {
            li.remove();
            // Remove the item from the questionsAnswers array
            questionsAnswers = questionsAnswers.filter(item => item !== qA);
        });

        return li;
    }

    // Array to store question and answer pairs
    let questionsAnswers = [];

    // Function to clear input fields
    function clearInputFields() {
        const inputFields = form.querySelectorAll('input');
        inputFields.forEach(function (input) {
            input.value = '';
        });
    }

    // Function to update the display with the current question and answer pairs
    function updateDisplay() {
        // Clear existing content in the display container
        ul.innerHTML = '';

        // Create and append list items for each question and answer pair
        questionsAnswers.forEach(qA => {
            const li = createListItem(qA);
            ul.appendChild(li);
        });
    }

    // Event listener for form submission
    form.addEventListener('submit', function (ev) {
        ev.preventDefault();

        // Get values from form inputs
        const question = document.getElementById('question').value;
        const answer = document.getElementById('answer').value;

        // Validate and ensure both question and answer are provided
        if (question.trim() !== '' && answer.trim() !== '') {
            // Push question and answer pair to the array
            questionsAnswers.push({ id: question, value: answer });

            // Clear input fields
            clearInputFields();

            // Check if there are five question and answer pairs
            if (questionsAnswers.length === 5) {
                // Show the list and hide the form
                convisu.classList.remove('hidden');
                conform.classList.add('hidden');

                // Update the display
                updateDisplay();
            }
        }
    });

    // Append the unordered list to the display container
    convisu.appendChild(ul);
});
