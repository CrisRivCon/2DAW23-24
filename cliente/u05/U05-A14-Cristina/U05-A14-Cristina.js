let formulario = document.getElementById('formulario');
let dni = document.getElementById('dni');
let nombre = document.getElementById('nombre');
let fecha = document.getElementById('fecha');
let email = document.getElementById('email');
let web = document.getElementById('web');
let contra = document.getElementById('contra');
let confirm = document.getElementById('confirm');
let submit = document.getElementById('submit');
let ver = document.getElementById('ver');
const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

dni.addEventListener('input', validarDni);
nombre.addEventListener('input', validarNombre);
fecha.addEventListener('input', validarFecha);
email.addEventListener('input', validarEmail);
web.addEventListener('input', validarWeb);
contra.addEventListener('input', validarContra);
confirm.addEventListener('input', validarConfirm);
formulario.addEventListener('change', validarTodos);
ver.addEventListener('click', mostrarCookie);

// DNI
function validarDni() {
    if ( dni.validity.valueMissing ) {
        dni.setCustomValidity('Introduce un valor de DNI.');
    } else if (dni.validity.patternMismatch){
        dni.setCustomValidity('DNI no válido.');
    } else if ( !letraDni(dni.value) ) {
        dni.setCustomValidity('Letra errónea.');
    } else {
        dni.setCustomValidity('');
    }
    
    if (dni.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function letraDni(dni){
    let d = dni.split('-');
    if (d.length >= 2) {
        let numeroDni = d[0].replaceAll('.', '');
        let resto = numeroDni % 23;
        return d[1].toUpperCase() == letra[resto];
    } else {
        return false;
    }
}

// Nombre
function validarNombre() {
    if ( nombre.validity.valueMissing ) {
        nombre.setCustomValidity('Introduce un nombre.');
    } else if ( nombre.validity.patternMismatch ){
        nombre.setCustomValidity('Nombre no válido.');
    } else {
        nombre.setCustomValidity('');
    }
    
    if (nombre.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

// Fecha
function validarFecha() {
    if ( fecha.validity.valueMissing ) {
        fecha.setCustomValidity('Introduce un fecha.');
    } else if ( fecha.validity.patternMismatch ){
        fecha.setCustomValidity('Fecha no válida.');
    } else {
        fecha.setCustomValidity('');
    }
    
    if (fecha.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

// Email
function validarEmail() {
    if ( email.validity.valueMissing ) {
        email.setCustomValidity('Introduce un email.');
    } else if ( email.validity.patternMismatch ){
        email.setCustomValidity('Email no válido.');
    } else {
        email.setCustomValidity('');
    }
    
    if (email.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

// Web
function validarWeb() {
    if ( web.validity.valueMissing ) {
        web.setCustomValidity('Introduce una direción web.');
    } else if ( web.validity.patternMismatch ){
        web.setCustomValidity('Web no válido.');
    } else {
        web.setCustomValidity('');
    }
    
    if (web.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

// Contra
function validarContra() {
    if ( contra.validity.valueMissing ) {
        contra.setCustomValidity('Introduce un contraseña.');
    } else if ( contra.validity.patternMismatch ){
        contra.setCustomValidity('Contraseña no válido.');
    } else {
        contra.setCustomValidity('');
    }
    
    if (contra.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

// Confirm
function validarConfirm() {
    if ( confirm.validity.valueMissing ) {
        confirm.setCustomValidity('Introduce una contraseña.');
    } else if ( confirm.validity.patternMismatch ){
        confirm.setCustomValidity('Contraseña no válida.');
    } else if ( contra.value != confirm.value) {
        confirm.setCustomValidity('Las contraseñas no coinciden.');
    } else {
        confirm.setCustomValidity('');
    }
    
    if (confirm.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarTodos(e) {
    if (validarDni(dni) && validarNombre(nombre) && validarFecha(fecha) 
        && validarEmail(email) && validarWeb(web) && validarContra(contra) 
        && validarConfirm(confirm)) {
            guardarCookie();
        }  else {
            e.preventDefault();
        }
}

// Auxiliares
function limpiarCampo(campo) {
    campo.value = '';
}

// Actividad 14

function guardarCookie() {
    for (i = 0; i < formulario.length; i++) {
        if( formulario[i].value == 'GUARDAR' || formulario[i].value == 'VER'){
            continue;
        }
        let nombre = formulario[i].id;
        let valor = formulario[i].value;
        document.cookie = `${nombre}=${valor};`;
    }
}

function mostrarCookie() {
    alert(document.cookie);
}