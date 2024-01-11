let imagen = document.getElementById("imagen");

imagen.addEventListener('mousedown', e => {
    imagen.src = '2.jpg';
});

imagen.addEventListener('mouseup', e => {
    imagen.src = '1.jpg';
});