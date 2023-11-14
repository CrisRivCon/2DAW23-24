var respuesta = document.getElementById('respuesta');
var arrayRandom = [];

function crearArray() {
    
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
