const contenedor = document.getElementById('contenedor');
const url = "U07-A01-Cristina.json";


// Con Fetch .then

/* fetch(url)
.then(response => response.json())
.then(datos => mostrarDatos(datos))
*/

// Con fetch async/await

/* trabajadores(url);

async function trabajadores(requestUrl) {
    const request = new Request(requestUrl);
    
    const response = await fetch(request);
    const texto = await response.text();

    const empleados = JSON.parse(texto);
    mostrarDatos(empleados);
} */

// Con XMLhttpRequest

function mostrarDatos(valor) {
    console.log(valor);
    let trabajadores = valor.departamento.trabajador;

    trabajadores.forEach(trabajador => {
        let p = document.createElement('p');
        p.textContent = trabajador.nombre + ' ' + trabajador.apellidos;
        contenedor.append(p);
    });
}