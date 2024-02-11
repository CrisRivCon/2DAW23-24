const inputs = document.getElementsByName('equipo');
const url = 'encuesta_voto.php';

const progress = document.querySelectorAll('.barra');


inputs.forEach(input => {
    input.addEventListener('input', actualizarPuntuacion);
});

function actualizarPuntuacion(e) {
    let nombre = e.target.id;

    fetch(`${url}?nombre=${nombre}`)
    .then(response => {
        if (!response.ok) throw new Error('Error');
        return response;
    })
    .then(response=>response.json())
    .then(data => {
        let puntuaciones = data.puntuaciones;
        progress.forEach((barra, i) => {
            barra.value = puntuaciones[i];
            barra.max = data.total;
        })
    })
    .catch(error => console.log(error));

}