const texto = document.getElementById('texto');
const contenedor = document.getElementById('contenedor');
const aniadir = document.getElementById('aniadir');
const eliminar = document.getElementById('eliminar');

aniadir.addEventListener('click', () => {
    let valor = texto.value;
    console.log('entra');
    console.log(valor);
    añadirDiv(valor);
});

eliminar.addEventListener('click', eliminarDiv);

function añadirDiv(texto) {
    let div = document.createElement('div');
    let contenido = document.createTextNode(texto);
    div.appendChild(contenido);
    contenedor.appendChild(div);
}

function eliminarDiv() {
    contenedor.removeChild(contenedor.lastChild);
}