let cuadro = document.getElementById('cuadro');
let objeto = {
    'ArrowUp': -10,
    'ArrowRight': 10,
    'ArrowDown': 10,
    'ArrowLeft': -10,
}

document.addEventListener('keydown', e => {
    if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
        cuadro.style.top = cuadro.offsetTop + objeto[e.key] + 'px';
    } else if (e.key == 'ArrowRight' || e.key == 'ArrowLeft') {
        cuadro.style.left = cuadro.offsetLeft + objeto[e.key] + 'px';
    }
});
