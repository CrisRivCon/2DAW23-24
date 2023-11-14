var respuesta = document.getElementById('respuesta');
var tabla = document.getElementById('tabla');
var nombre = document.getElementById('nombre');
var nota = document.getElementById('nota');

var reset = document.getElementById('reset');
var aniadir = document.getElementById('aniadir');
var mostrar = document.getElementById('mostrarTabla');
var alumnos = [];

function resetearArray(){
    alumnos = [];
    nombre.value = '';
    nota.value = '';
    limpiarPantalla();
}

function aniadirAlArray() {
    limpiarPantalla();
    let valorNombre = nombre.value.trim();
    let valorNota = nota.value.trim();

    if (valorNombre != '' && valorNota != '') {
        let arra = [valorNombre, valorNota];
        alumnos.push(arra);
        console.log(alumnos);
        escribir('Añadido correctamente.')
    } else {
        escribir('No se ha podido añadir. Hay algún valor vacío.')
    }
}
function mostrarTabla() {
    limpiarPantalla();
    let table = document.createElement('table');
    let cabecera = document.createElement('thead');
    let trh = document.createElement('tr');
    let thNom = document.createElement('th');
    let thNot = document.createElement('th');
    thNom.textContent = 'Nombre';
    trh.append(thNom);
    thNot.textContent = 'Nota';
    trh.append(thNot);
    cabecera.append(trh);
    table.append(cabecera);
    
        alumnos.forEach(element => {
            let tr = document.createElement('tr');
            for (i = 0; i < element.length; i++) {
                let td = document.createElement('td');
                td.textContent = element[i];
                tr.append(td);
            }
            table.append(tr);
        });

    tabla.append(table);
}

function escribir(res) {
    let p = document.createElement('p');
    p.textContent = res;
    respuesta.append(p);
}

function limpiarPantalla() {
    while (respuesta.hasChildNodes()) {
        respuesta.removeChild(respuesta.firstChild);
    }
}

aniadir.addEventListener('click', aniadirAlArray);
reset.addEventListener('click', resetearArray);
mostrar.addEventListener('click', mostrarTabla);