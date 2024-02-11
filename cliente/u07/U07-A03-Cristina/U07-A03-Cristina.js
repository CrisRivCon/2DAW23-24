const inputs = document.getElementsByName('equipo');
const url = 'encuesta_voto.php';

const progress = document.querySelectorAll('.barra');


inputs.forEach(input => {
    input.addEventListener('input', actualizarPuntuacion);
});

function actualizarPuntuacion(e) {
    let nombre = e.target.id;

    fetch(`${url}?nombre=${nombre}`)
    .then(response=>response.json())
    .then(data => {
        let porcentajes = data.porcentajes;
        progress.forEach((barra, i) => {
            barra.value = porcentajes[i];
            barra.max = data.total;
        })
    })

}