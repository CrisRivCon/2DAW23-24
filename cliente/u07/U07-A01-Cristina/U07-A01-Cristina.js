const contenedor = document.getElementById('contenedor');
const url = "U07-A01-Cristina.json";


// Con Fetch .then
fetch(url)
.then(response => response.json())
.then((datos) => {
    escribir('Con Fetch .then');
    mostrarDatos(datos);
})


// Con fetch async/await

trabajadores(url);

async function trabajadores(requestUrl) {
    const request = new Request(requestUrl);
    
    const response = await fetch(request);
    const texto = await response.text();
    
    const empleados = JSON.parse(texto);
    escribir('Con fetch async/await');
    mostrarDatos(empleados);
}

// Con XMLhttpRequest

let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';
request.send();

request.onload = function() {
    const empleadosTexto = request.response;
    const empleadosJSON = JSON.parse(empleadosTexto);
    escribir('Con XMLhttpRequest');
    mostrarDatos(empleadosJSON);
}


// Funciones auxiliares

function mostrarDatos(valor) {
    let trabajadores = valor.departamento.trabajador;

    trabajadores.forEach(trabajador => {
        let p = document.createElement('p');
        p.textContent = trabajador.nombre + ' ' + trabajador.apellidos;
        contenedor.append(p);
    });
}

function escribir(valor) {

    let h1 = document.createElement('h1');
    h1.textContent = valor;
    contenedor.append(h1);
}