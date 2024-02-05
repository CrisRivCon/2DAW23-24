const contenedor = document.getElementById('contenedor');

fetch("U07-A01-Cristina.json")
.then(response=> response.json())
.then(datos => mostrarDatos(datos))


function mostrarDatos(valor) {
    let p = document.createElement('p');
    
}