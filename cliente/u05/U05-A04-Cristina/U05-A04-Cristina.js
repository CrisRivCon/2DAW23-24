let cuerpo = document.getElementById('cuerpo');

document.addEventListener('mousedown', e => {
    cuerpo.classList.add('amarillo');
});

document.addEventListener('mousemove', e => {
    if (cuerpo.className == 'amarillo') {
        cuerpo.classList.remove('amarillo');
    } else if (cuerpo.className == 'azul') {
        cuerpo.classList.remove('azul');
    }
});

document.addEventListener('keydown', e => {
    cuerpo.classList.add('azul');
});