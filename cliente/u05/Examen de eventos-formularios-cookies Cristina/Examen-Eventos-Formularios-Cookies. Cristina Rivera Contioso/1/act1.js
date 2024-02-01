const teclasColores = {
    'A': 'amarillo',
    'R': 'rojo',
    'N': 'negra',
    'V': 'verde',
}
const cuerpo = document.getElementById('cuerpo');

document.addEventListener('keydown', cambiarColor);

function cambiarColor(e) {
    cuerpo.removeAttribute('class');
    cuerpo.classList.add(teclasColores[e.key]);
}

document.addEventListener('mousemove', () => {
    cuerpo.removeAttribute('class');
})