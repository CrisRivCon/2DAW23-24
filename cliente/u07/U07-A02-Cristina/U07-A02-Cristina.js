const lista = document.getElementById('ciudad');
const url = "U07-A02-Cristina.php";
const input = document.getElementById('input');

input.addEventListener('input', cogerDatos);


function cogerDatos(e) {

    const datos = e.target.value;

    fetch(url + '?buscar=' + datos)
        .then(response => {
            if (!response.ok) throw new Error('Error');
            return response;
        })
        .then(response => response.json())
        .then(datos => {

            let ciudades = Object.values(datos);

            while (lista.hasChildNodes()) {
                lista.removeChild(lista.firstChild);
            }

            ciudades.forEach(ciudad => {
                crearOpcion(ciudad.label);
            })
        })
        .catch(error => console.log(error));
}



function crearOpcion(valores) {
    let opcion = document.createElement('option');
    opcion.value = valores;
    opcion.textContent = valores;
    lista.append(opcion);
}
