var respuesta = document.getElementById('respuesta');

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
