let formulario = document.getElementById('formulario');
let dni = document.getElementById('dni');
const regexDni = /^\d{2}\.\d{3}\.\d{3}\-\w$/;
const letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K'];

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    console.log(e.target);
    e.preventDefault();
}






function validarDni(valor) {
    let input = dni;
    regexDni.test(input.value) && letraDni(input.value) ? valido(input) : invalido(input);
}

function letraDni(dni){
    let d = dni.split('-');
    let numeroDni = d[0].replaceAll('.', '');
    let resto = numeroDni % 23;
    console.log(resto);
    return d[1].toUpperCase() == letra[resto];
}

function valido(input) {
    input.classList.remove('invalido')
    input.classList.add('valido');
}

function invalido(input) {
    input.classList.remove('valido');
    input.classList.add('invalido');
}