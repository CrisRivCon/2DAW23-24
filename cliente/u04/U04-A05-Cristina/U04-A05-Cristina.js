var respuesta = document.getElementById('respuesta');
var boton = document.getElementById('boton');
var reset = document.getElementById('reset');
var input = document.getElementById('valor');
var palabras = [];

function resetearArray(){
    palabras = [];
    input.value = '';
    limpiarPantalla();
}

function aniadirAlArray() {
    let valor = input.value.trim();
    if (valor != '') {
        palabras = palabras.concat(valor.split(' '))
    }
}

function manipularArray() {
    limpiarPantalla();
    aniadirAlArray();

    if (palabras.length != 0) {
        console.log(palabras);
        escribir(`1. ${palabras.join(', ')}`);
        escribir(`2. ${palabras.slice().reverse()}`);
        escribir(`3. ${palabras[0]}`);
        escribir(`4. ${palabras[palabras.length - 1]}`);
        escribir(`4. ${palabras.length}`);
        escribir(`4. ${palabras.sort()}`);
        escribir(`4. ${palabras.reverse()}`);
    }else {
        escribir('El array está vacío.')
    }
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

boton.addEventListener('click', manipularArray);
reset.addEventListener('click', resetearArray);