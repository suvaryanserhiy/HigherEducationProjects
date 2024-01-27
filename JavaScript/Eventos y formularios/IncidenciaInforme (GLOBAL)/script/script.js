// Declarations

const tipoIncidencia = document.getElementById('tipo'); // Selector for incidence type dropdown
const descBtn = document.getElementById('mostrarDescripcion'); // Button to show description
const sendBtn = document.getElementById('enviar'); // Button to send data
const numSerieInput = document.getElementById('serie'); // Input for serial number
const labelSerie = document.getElementById('labelSerie'); // Label for serial number (used only to show the error)

const incidencias = [ // Array of incidence objects
    { id: 'distribucion', value: 'img/distibucion.jpeg' },
    { id: 'oficina', value: 'img/oficina.jpeg' },
    { id: 'produccion', value: 'img/produccion.jpeg' }
];

// EVENT HANDLERS
tipoIncidencia.addEventListener('change', changeTipoIncidenciaImg); //change photo when another option being selected
descBtn.addEventListener('click', descriptionBtn); //show desription field when press a button
sendBtn.addEventListener('click', sendData); // check if all input data is valid and "submit"

// Function to change the displayed image based on selected incidence type
function changeTipoIncidenciaImg() {
    const selectedIncidencia = incidencias.find(incidencia => incidencia.id === tipoIncidencia.value); // find and store requiered photo to show

    if (selectedIncidencia) {
        const img = document.getElementById('imagen');
        img.setAttribute('src', selectedIncidencia.value);
    }
}

// Function to handle the description button click
function descriptionBtn() {
    const td = document.getElementById('addDesc');
    td.removeChild(descBtn); //hide (remove) btn

    // show to desc field (the structure was taken from exercise)
    const descDiv = document.createElement('div');
    descDiv.id = 'fDescripcion';


    //create and set tags/attributes
    const descLabel = createAndSetElement('label', { for: 'descripcion', id: 'labelDescripcion', textContent: 'Descripción' });
    const br = document.createElement('br');
    const textArea = createAndSetElement('textarea', { name: 'descripcion', id: 'descripcion', cols: '30', rows: '10' });

    descDiv.append(descLabel, br, textArea);
    td.appendChild(descDiv);
}

// Function to handle form submission and validate serial number
function sendData(ev) {
    if (!validateSerie(numSerieInput.value)) { // if validation was false

        ev.preventDefault(); // don't send data


        //show error messeges
        numSerieInput.classList.add('error');
        labelSerie.parentNode.classList.add('error');

        const errorDiv = document.getElementById('capaError');
        errorDiv.classList.add('messageError');
        errorDiv.textContent = "Código no válido";
    }
}

// Function to validate serial number against a regular expression (requires 3 letters, 4 uppercase letters, and can be 1, 2, or A)
function validateSerie(num) {
    const regExp = /^[A-Za-z]{3}[A-Z]{4}[12A]$/;
    return regExp.test(num);
}


// Event listener to reset error styles when input field gains focus
document.getElementById('myForm').addEventListener('focus', returnToDefault, true);

// Function to reset error styles when input field gains focus
function returnToDefault(event) {
    if (event.target.id === 'serie') {
        numSerieInput.classList.remove('error');
        labelSerie.parentNode.classList.remove('error');

        const errorDiv = document.getElementById('capaError');
        errorDiv.classList.remove('messageError');
        errorDiv.textContent = '';
    }
}

// Helper function to create an element and set attributes
function createAndSetElement(tag, attributes) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => element[key] = value);
    return element;
}
