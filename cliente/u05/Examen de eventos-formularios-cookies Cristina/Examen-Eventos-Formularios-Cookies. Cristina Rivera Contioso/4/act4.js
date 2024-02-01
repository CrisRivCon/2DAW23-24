const imagen = document.getElementById('imagen');

imagen.addEventListener('mousedown', () => {
    imagen.src = 'gato(3).png';
    imagen.addEventListener('mousemove', moverImagen);
});

document.addEventListener('mouseup', () => {
    imagen.src = 'gato.png';
    imagen.removeEventListener('mousemove', moverImagen);
});

function moverImagen(e) {
    imagen.style.top = e.clientY - (imagen.clientHeight / 2) + 'px';
    imagen.style.left = e.clientX - (imagen.clientWidth / 2) + 'px';
}