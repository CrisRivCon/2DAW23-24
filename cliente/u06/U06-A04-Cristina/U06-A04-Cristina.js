const texto = document.getElementById('texto');
const contenedor = document.getElementById('contenedor');
const aniadir = document.getElementById('aniadir');
const cabecera = ['Alumno', 'Módulo 1', 'Módulo 2', 'Módulo 3'];
let alumnos = [];


aniadir.addEventListener('click', () => {
    let valor = texto.value;
    crearAlumno(valor);
});


function crearAlumno(valor) {
    if (alumnos.length < 5) {
        let valores = valor.split(',');
        let alumno =  [valores[0], [valores[1], valores[2], valores[3]]];
        alumnos.push(alumno);
        crearTabla();
    } else {
        alert('Máximo de alumnos añadidos.')
    }
}

function crearTabla() {
    let tabla = document.createElement('table');
    let thead = document.createElement('thead');
    let claves = cabecera;

    claves.forEach(clave => {
        let th = document.createElement('th');
        let textoCabe = document.createTextNode(clave);
        th.appendChild(textoCabe);
        thead.appendChild(th);
    });

    tabla.appendChild(thead);

    alumnos.forEach(alumno => {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let textoCuerpo = document.createTextNode(alumno[0]);
        td.appendChild(textoCuerpo);
        tr.appendChild(td);
        alumno[1].forEach(nota => {
            let td = document.createElement('td');
            let textoCuerpo = document.createTextNode(nota);
            td.appendChild(textoCuerpo);
            tr.appendChild(td);
        });
        tabla.appendChild(tr);
    });

    if (contenedor.hasChildNodes()){
        contenedor.removeChild(contenedor.firstChild);
    }

    contenedor.appendChild(tabla);
}

