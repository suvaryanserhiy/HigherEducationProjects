document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (ev) {
        ev.preventDefault(); // Prevent the default form submission behavior

        const dni = document.getElementById('dni').value;
        const name = document.getElementById('name').value;
        const birthday = document.getElementById('birthday').value;
        const childrenNum = document.getElementById("childNumber").value;
        const email = document.getElementById('email').value;
        const webPage = document.getElementById('webPage').value;
        const password = document.getElementById('password').value;

        // Call the formValidation function and check the return value
        const isValid = formValidation(dni, name, birthday, email, webPage, password);

        if (isValid) {
            console.info('Data submitted:', dni, name, birthday, email, webPage, password);
        } else {
            console.error('Validation failed. Please check your inputs.');
        }
    });
});

function formValidation(dni, name, birthday, childrenNum, email, webPage, password) {
    const regExpDNI = /(([x-z]|[X-Z]{1})([-]?)(\d{7})([-]?)([a-z]|[A-Z]{1}))|((\d{8})([-]?)([a-z]|[A-Z]{1}))/;
    const regExpName = /^[a-zA-Z\s\xE1\xE9\xED\xF3\xFA\xC1\xC9\xCD\xD3\xDA]{2,}$/;
    const regExpDate = /^\d{4}-\d{2}-\d{2}$/;
    const regExpChild = /\d*/;
    const regExpEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
    const regExpWeb = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/;  /*
                                                                                        - at least 8 characters
                                                                                        - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
                                                                                        - Can contain special characters
                                                                                      */

    const isValidDNI = regExpDNI.test(dni);
    const isValidName = regExpName.test(name);
    const isValidDate = regExpDate.test(birthday);
    const isValidChild = regExpChild.test(childrenNum);
    const isValidEmail = regExpEmail.test(email);
    const isValidWeb = regExpWeb.test(webPage);
    const isValidPass = regExpPass.test(password);

    // Return true if all validations pass, otherwise return false
    return isValidDNI && isValidName && isValidDate && isValidChild && isValidEmail && isValidWeb && isValidPass;
}
