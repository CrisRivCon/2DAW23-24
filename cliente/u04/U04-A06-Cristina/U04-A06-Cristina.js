var respuesta = document.getElementById('respuesta');
var nombre = document.getElementById('nombre');
var nota = document.getElementById('nota');
var reset = document.getElementById('reset');
var input = document.getElementById('valor');
var alumnos = [];

function resetearArray(){
    alumnos = [];
    nombre.value = '';
    nota.value = '';
    limpiarPantalla();
}

function aniadirAlArray() {
    let valor = input.value.trim();
    if (valor != '') {
        palabras = palabras.concat(valor.split(' '))
    }
}
function mostrarTabla() {


}

function escribir(res) {
    let p = document.createElement('p');
    p.textContent = res;
    respuesta.append(p);
}

function limpiarPantalla() {
    while (respuesta.hasChildNodes()) {
        respuesta.removeChild(respuesta.firstChild);
    }
}

boton.addEventListener('click', mostrarTabla);
reset.addEventListener('click', resetearArray);