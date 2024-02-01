const imagen = document.getElementById('imagen');

imagen.addEventListener('mousedown', () => {
    imagen.addEventListener('mousemove', moverImagen);
});

document.addEventListener('mouseup', () => {
    imagen.removeEventListener('mousemove', moverImagen);
});

function moverImagen(e) {
    imagen.style.top = e.clientY - (imagen.clientHeight / 2) + 'px';
    imagen.style.left = e.clientX - (imagen.clientWidth / 2) + 'px';
}