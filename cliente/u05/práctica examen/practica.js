const imagen = document.getElementById('imagen');

imagen.addEventListener('mousedown', cambiarImagen);
imagen.addEventListener('mouseup', volverImagen);

function cambiarImagen() {
    imagen.src = 'gato(3).png';
}

function volverImagen(e) {
    imagen.src = 'gato.png';
}

imagen.addEventListener('dragend', moverImagen);

function moverImagen(e) {
    imagen.src = 'gato.png';
    imagen.style.top = e.clientY - (imagen.clientHeight / 2) + 'px';
    imagen.style.left = e.clientX - (imagen.clientWidth / 2) + 'px';
}