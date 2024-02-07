const lista = document.getElementById('ciudad');
const url = "U07-A02-Cristina.php";
const input = document.getElementById('input');

input.addEventListener('input', cogerDatos);

function cogerDatos(e) {

    const datos = e.target.value;

    fetch(url + '?buscar=' + datos)

        .then(response => response.text())
        
        .then(datos => {
            console.log(datos);
        })
}





crearOpcion()

function crearOpcion(valores) {
    let opcion = document.createElement('option');
    opcion.value = 'hola';
    opcion.textContent = 'hola';
    lista.append(opcion);
}
