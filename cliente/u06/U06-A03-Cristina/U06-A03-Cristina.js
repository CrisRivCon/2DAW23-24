const texto = document.getElementById('texto');
const contenedor = document.getElementById('contenedor');
const aniadir = document.getElementById('aniadir');
const mostrarTabla = document.getElementById('mostrar-tabla');
const cabecera = ['Alumno', 'Módulo 1', 'Módulo 2', 'Módulo 3'];
let alumnos = [];


aniadir.addEventListener('click', () => {
    let valor = texto.value;

    crearAlumno(valor);
});

mostrarTabla.addEventListener('click', crearTabla);

function crearAlumno(valor) {
    if (alumnos.length < 5) {
        let valores = valor.split(',');
        let coche =  new Coche(...valores);
        coches.push(coche);
    } else {
        crearTabla();
    }
}

function crearTabla(texto) {
    if (coches.length <= 0) {
        alert('No hay coches.')
        return
    }
    let tabla = document.createElement('table');
    let thead = document.createElement('thead');
    let claves = Object.keys(new Coche());

    claves.forEach(clave => {
        let th = document.createElement('th');

        let textoCabe = document.createTextNode(clave);
        th.appendChild(textoCabe);
        thead.appendChild(th);
    });

    coches.forEach(coche => {
        let valores = Object.values(coche);
        tabla.appendChild(thead);
        let tr = document.createElement('tr');
        valores.forEach(valor => {
            let td = document.createElement('td');
            let textoCuerpo = document.createTextNode(valor);
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
