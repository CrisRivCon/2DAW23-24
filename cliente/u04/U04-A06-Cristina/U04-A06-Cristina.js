var respuesta = document.getElementById('respuesta');
var contador = document.getElementById('contador');
var tabla = document.getElementById('tabla');
var nombre = document.getElementById('nombre');
var nota1 = document.getElementById('nota1');
var nota2 = document.getElementById('nota2');
var nota3 = document.getElementById('nota3');

var reset = document.getElementById('reset');
var aniadir = document.getElementById('aniadir');
var mostrar = document.getElementById('mostrarTabla');
var alumnos = [];

function resetearArray(){
    alumnos = [];
    nombre.value = '';
    nota1.value = '';
    nota2.value = '';
    nota3.value = '';
    limpiarPantalla(respuesta);
    limpiarPantalla(tabla);
    limpiarPantalla(contador);
}

function aniadirAlArray() {

    if (alumnos.length >= 5) {
        limpiarPantalla(respuesta);
        escribir('Solo puede introducir 5 alumnos.');
        return;
    }

    limpiarPantalla(respuesta);
    let valorNombre = nombre.value.trim();
    let valorNota1 = nota1.value.trim();
    let valorNota2 = nota2.value.trim();
    let valorNota3 = nota3.value.trim();

    if (valorNombre != '' && /^[0-9]$|^10$/.test(valorNota1) && /^[0-9]$|^10$/.test(valorNota2) && /^[0-9]$|^10$/.test(valorNota3)) {
        let arra = [valorNombre, valorNota1, valorNota2, valorNota3];
        alumnos.push(arra);
        escribir('Añadido correctamente.')
        limpiarPantalla(contador);
        escribir(`Hay ${alumnos.length} alumnos.`, contador);
        return;

    } else {
        escribir('No se ha podido añadir. Hay ocurrido un error.')
    }

}

function mostrarTabla() {

    limpiarPantalla(respuesta);
    limpiarPantalla(tabla);
    let titulos = ['Nombre', 'Nota 1', 'Nota 2', 'Nota 3'];

    if (alumnos.length != 0) {
        let table = document.createElement('table');
        let cabecera = document.createElement('thead');
        let trh = document.createElement('tr');
 
        titulos.forEach(element => {
            let th = document.createElement('th');
            th.textContent = element;
            trh.append(th);
        });

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
            tabla.append(table);
        });
        
    } else {
        escribir('No hay datos.');
    }
    

}

function escribir(res, contenedor = respuesta) {
    let p = document.createElement('p');
    p.textContent = res;
    contenedor.append(p);
}

function limpiarPantalla(contenedor) {
    while (contenedor.hasChildNodes()) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

aniadir.addEventListener('click', aniadirAlArray);
reset.addEventListener('click', resetearArray);
mostrar.addEventListener('click', mostrarTabla);