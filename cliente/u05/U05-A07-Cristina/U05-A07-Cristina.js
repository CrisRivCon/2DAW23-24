let respuesta = document.getElementById('respuesta');
let imagen = document.getElementById('imagen');

function mostrarError() {
    respuesta.textContent = 'Error en la imagen';
}

imagen.addEventListener('error', mostrarError);
imagen.addEventListener('abort', mostrarError);