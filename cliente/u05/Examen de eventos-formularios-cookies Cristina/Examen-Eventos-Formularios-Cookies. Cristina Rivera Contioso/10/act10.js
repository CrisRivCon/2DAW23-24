const botonVer = document.getElementById('ver');
const botonGuardar = document.getElementById('guardar');
const dni = document.getElementById('dni');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const edad = document.getElementById('edad');
const nacimiento = document.getElementById('lugar_nacimiento');
const formulario = document.getElementById('formulario');
const verCuki = document.getElementById('cuki');

verCuki.addEventListener('click', () => {
    alert(document.cookie);
});

botonVer.addEventListener('click', () => {
    if (dni.type == 'text'){
        dni.type = 'password';
    } else {
        dni.type = 'text';
    }
});

for( i = 0; i < formulario.length; i++) {
    formulario[i].addEventListener('blur', () => {
        validarInputs();
    })
}


botonGuardar.addEventListener('click', (e) => {
    let inputs = formulario;
    validarInputs();
    for( i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()){
            inputs[i].value = '';
            return
        }
        setCookie(inputs[i].name, inputs[i].value);
    }
});

function validarInputs() {
    validarNombre();
    validarApellido();
    validarEdad();
    validarDni();

}

function validarDni() {
    if ( dni.validity.valueMissing ) {
        dni.setCustomValidity('El campo DNI no puede estar vacío.');
    } else if (dni.validity.patternMismatch){
        dni.setCustomValidity('El patrón del DNI no es el correcto.');
    } else {
        dni.setCustomValidity('');
    }
    
    if (dni.checkValidity()) {
        return true;
    } else {
        return false;
    }
}


function validarNombre() {
    if ( nombre.validity.valueMissing ) {
        nombre.setCustomValidity('El campo Nombre no puede estar vacío.');
    } else if ( nombre.validity.patternMismatch ){
        nombre.setCustomValidity('El patrón del Nombre no es el correcto.');
    } else {
        nombre.setCustomValidity('');
    }
    
    if (nombre.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarApellido() {
    if ( apellido.validity.valueMissing ) {
        apellido.setCustomValidity('El campo Apellido no puede estar vacío.');
    } else if ( apellido.validity.patternMismatch ){
        apellido.setCustomValidity('El patrón del Apellido no es el correcto.');
    } else {
        apellido.setCustomValidity('');
    }
    
    if (apellido.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarEdad() {
    if ( edad.validity.valueMissing ) {
        edad.setCustomValidity('El campo Edad no puede estar vacío.');
    } else if ( edad.validity.rangeOverflow || edad.validity.rangeUnderflow){
        edad.setCustomValidity('El patrón del Edad no es el correcto.');
    } else {
        edad.setCustomValidity('');
    }
    
    if (edad.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function validarNacimiento() {
    if ( nacimiento.validity.valueMissing ) {
        nacimiento.setCustomValidity('El campo Lugar de Nacimiento no puede estar vacío.');
    } else if ( nacimiento.validity.rangeOverflow || nacimiento.validity.rangeUnderflow){
        nacimiento.setCustomValidity('El patrón del Lugar de Nacimiento no es el correcto.');
    } else {
        nacimiento.setCustomValidity('');
    }
    
    if (nacimiento.checkValidity()) {
        return true;
    } else {
        return false;
    }
}

function setCookie(nombre, valor) {
    let cuki = nombre + '=' + valor;
    document.cookie = cuki ;
}
