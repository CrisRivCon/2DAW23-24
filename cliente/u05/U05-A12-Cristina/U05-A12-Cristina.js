let formulario = document.getElementById('formulario');
let dni = document.getElementById('dni');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let email = document.getElementById('email');
let web = document.getElementById('web');
let contra = document.getElementById('contra');
let confirm = document.getElementById('confirm');
const regexDni = /^\d{2}\.\d{3}\.\d{3}\-\w$/;
const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

dni.addEventListener('blur', validarDni);
nombre.addEventListener('blur', validarNombre);

// DNI
function validarDni() {
    /* console.log(dni);
    console.log(dni.value);
    console.log(dni.checkValidity()); */

    if (!dni.checkValidity()){
        //dni.setCustomValidity("DNI Mal");
        invalido(dni);
        limpiarCampo(dni);
        return
    } else if ( !letraDni(dni.value) ) {
        invalido(dni);
        limpiarCampo(dni);
        //dni.setCustomValidity("Letra de DNI Mal");
        return
    }
    valido(dni);
}

function letraDni(dni){
    let d = dni.split('-');
    let numeroDni = d[0].replaceAll('.', '');
    let resto = numeroDni % 23;
    return d[1].toUpperCase() == letra[resto];
}

// Nombre

function validarNombre() {

    if ( nombre.checkValidity() ) {
        valido(nombre);
        return
    } 

    invalido(nombre);
    nombre.setCustomValidity("Nombre Mal");
    return
}

// Fecha

function validarFecha() {
    
}

// Auxiliares
function valido(input) {
    input.classList.remove('invalido')
    input.classList.add('valido');
}

function invalido(input) {
    input.classList.remove('valido');
    input.classList.add('invalido');
}

function limpiarCampo(campo) {
    campo.value = '';
}