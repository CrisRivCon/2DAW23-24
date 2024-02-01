const parrafo = document.getElementById('parrafo');

parrafo.addEventListener('mousedown', () => {
    parrafo.textContent = 'TEXTO NUEVO';
    parrafo.addEventListener('mousemove', moverImagen);
});

document.addEventListener('mouseup', () => {
    parrafo.textContent = 'TEXTO ORIGINAL';
    parrafo.removeEventListener('mousemove', moverImagen);
});

function moverImagen(e) {
    parrafo.style.top = e.clientY - (parrafo.clientHeight / 2) + 'px';
    parrafo.style.left = e.clientX - (parrafo.clientWidth / 2) + 'px';
}