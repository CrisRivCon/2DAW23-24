const imagen = document.getElementById('imagen');

imagen.addEventListener('mousedown', cambiarImagen);
document.addEventListener('mouseup', volverImagen);


imagen.ondragstart = function() {
    return false;
}
function cambiarImagen() {
    imagen.src = 'gato(3).png';
    imagen.addEventListener('mousemove', moverImagen);
}

function volverImagen() {
    imagen.removeEventListener('mousemove', moverImagen);
    imagen.src = 'gato.png';
}


function moverImagen(e) {
    imagen.style.top = e.clientY - (imagen.clientHeight / 2) + 'px';
    imagen.style.left = e.clientX - (imagen.clientWidth / 2) + 'px';
}






const cambiar = document.getElementById('cambiar');
const input = document.getElementById('img');
cambiar.addEventListener('click', cambiarImg);
function cambiarImg() {
    console.log(input.value);
}