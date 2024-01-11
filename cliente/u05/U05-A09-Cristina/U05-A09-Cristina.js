let google = document.getElementById('google');
let asignatura = document.getElementById('asignatura');
let formulario = document.getElementById('formulario');
const EMAIL = {
    'lengua': 'lengua@lengua.com',
    'matematicas': 'matematicas@matematicas.com',
    'literatura': 'literatura@literatura.com',
    'historia': 'historia@historia.com',
}


function redirigir() {
    window.location.href = 'https://www.google.es';
}

google.addEventListener('click', redirigir);

asignatura.addEventListener('change', e => {
    let valor = asignatura[asignatura.options['selectedIndex']].value;
    formulario.action = `mailto:${EMAIL[valor]}?subject=Formulario`;
});