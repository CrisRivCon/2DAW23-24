var respuesta = document.getElementById('respuesta');

function crearArray() {
    let array = [];
    for (let i = 0; i < 5; i++) {
        array.push(Math.trunc(Math.random()*100));
    }
    escribir(array);
    return array;
}

function comprobarPositivos(array) {
    if (array != '') {
        if (array.every((x) =>  x > 0)) {
            escribir('Son todos positivos.');
            return;
        } else {
            escribir('No son todos positivos.');
        }
    } else {
        escribir('El array está vacío.');
    }
}

function triplicarValores(array) {
    escribir(array.map((valor) => valor * 3));
}

function multiplicarValores(array) {
    let resultado = array.reduce((acc, valor) => acc * valor, 1);
    escribir(resultado);
}

function actividad() {
    let array = crearArray();
    comprobarPositivos(array);
    triplicarValores(array);
    multiplicarValores(array);
}

function escribir(res, contenedor = respuesta) {
    let p = document.createElement('p');
    p.textContent = res;
    contenedor.append(p);
}

function limpiarPantalla(contenedor) {
    while (contenedor.hasChildNodes()) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

actividad();