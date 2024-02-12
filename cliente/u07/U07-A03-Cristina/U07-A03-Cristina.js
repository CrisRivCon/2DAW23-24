const inputs = document.getElementsByName('equipo');
const url = 'encuesta_voto.php';

const progress = document.querySelectorAll('.barra');
const votar = document.getElementById('votar');

inputs.forEach(input => {
    input.addEventListener('input', actualizarPuntuacion);
});

votar.addEventListener('click', actualizarPuntuacion);


function actualizarPuntuacion(e) {
    const input = document.querySelector('input:checked');
    console.log(input);
    let nombre = input.id;

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