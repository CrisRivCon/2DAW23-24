var respuesta = document.getElementById('respuesta');

function crearArray() {
    let arrayRandom = [];
    for (i = 0; i < 10; i++) {
        arrayRandom.push(Math.trunc(Math.random() * 10))
    }
    return arrayRandom;
}

function mayores(x) {
    let arra = crearArray();
    escribir(arra.join(', '));
    let filtrado = arra.filter((valor) => valor < 8 );
    escribir(filtrado.join(', '));
    return filtrado;
}

function remplazarImpares(arra) {
    let impar = arra.map((valor) => valor % 2 == 0 ? valor : 'impar');
    escribir(impar.join(', '))
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

remplazarImpares(mayores());