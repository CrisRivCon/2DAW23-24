let formulario = document.getElementById('formulario');
let dni = document.getElementById('dni');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let email = document.getElementById('email');
let web = document.getElementById('web');
let contra = document.getElementById('contra');
let confirm = document.getElementById('confirm');
let submit = document.getElementById('submit');
const regexDni = /^\d{2}\.\d{3}\.\d{3}\-\w$/;
const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

dni.addEventListener('blur', validarDni);
nombre.addEventListener('blur', validarNombre);
fecha.addEventListener('blur', validarFecha);
email.addEventListener('blur', validarEmail);
web.addEventListener('blur', validarWeb);
contra.addEventListener('blur', validarContra);
confirm.addEventListener('blur', validarConfirm);
formulario.addEventListener('change', validarTodos);

// DNI
function validarDni() {
    if ( dni.value == '') {
        invalido(dni);
        return false;
    } else if (!dni.checkValidity()){
        invalido(dni);
        limpiarCampo(dni);
        return false;
    } else if ( !letraDni(dni.value) ) {
        invalido(dni);
        limpiarCampo(dni);
        return false;
    }
    valido(dni);
    return true;
}

function letraDni(dni){
    let d = dni.split('-');
    let numeroDni = d[0].replaceAll('.', '');
    let resto = numeroDni % 23;
    return d[1].toUpperCase() == letra[resto];
}

// Nombre
function validarNombre() {

    if ( nombre.value != '' && nombre.checkValidity() ) {
        valido(nombre);
        return true;
    } 

    invalido(nombre);
    limpiarCampo(nombre);
    return false;
}

// Fecha
function validarFecha() {
    if ( fecha.value != '' &&fecha.checkValidity() ) {
        valido(fecha);
        return true;
    } 

    invalido(fecha);
    limpiarCampo(fecha);
    return false;
}

// Email
function validarEmail() {
    if ( email.value != '' && email.checkValidity() ) {
        valido(email);
        return true;
    } 

    invalido(email);
    limpiarCampo(email);
    return false;
}

// Web
function validarWeb() {
    if ( web.value != '' && web.checkValidity() ) {
        valido(web);
        return true;
    } 

    invalido(web);
    limpiarCampo(web);
    return false;
}

// Contra
function validarContra() {
    if ( contra.value != '' && contra.checkValidity() ) {
        valido(contra);
        return true;
    } 

    invalido(contra);
    limpiarCampo(contra);
    return false;
}

// Confirm
function validarConfirm() {
    if (confirm.value != contra.value){
        invalido(confirm);
        limpiarCampo(confirm);
        return false;
    } else if ( confirm.value == '' ) {
        invalido(confirm);
        return false;
    } else if (!confirm.checkValidity() ) {
        invalido(confirm);
        limpiarCampo(confirm);
        return false;
    } 
    
    valido(confirm);
    return true;
}

function validarTodos() {
    if (validarDni(dni) && validarNombre(nombre) && validarFecha(fecha) && validarEmail(email)
        && validarWeb(web) && validarContra(contra) && validarConfirm(confirm)) {
            habilitarSubmit();
        } else {
            deshabilitarSubmit();
        }
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

function habilitarSubmit() {
    submit.removeAttribute('disabled');
}

function deshabilitarSubmit() {
    submit.setAttribute('disabled', '');
}