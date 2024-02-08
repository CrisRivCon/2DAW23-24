const inputs = document.getElementsByName('equipo');
const url = 'encuesta_voto.php';

inputs.forEach(input => {
    input.addEventListener('input', actualizarPuntuacion);
});

function actualizarPuntuacion(e) {
    console.log('hola');
    let nombre = e.target.id;

    fetch(`${url}?nombre=${nombre}`)
    .then(response=>response.text())
    .then(data => {
        console.log(data);
    })

}