let respuesta = document.getElementById('respuesta');
let objeto = {
    0: 'Clic izquierdo',
    1: 'Clic central',
    2: 'Clic derecho'
}

document.addEventListener('mousedown', e => {
    escribir(objeto[e.button]);
});

function escribir(res) {
    respuesta.textContent = res;
}