var respuesta = document.getElementById('respuesta');
var boton = document.getElementById('boton');
var impares = [];

function creaImpares(impares) {
    for (let i = 1; i <= 21; i++) {
        if (( i % 2 ) != 0 ) {
            impares.push(i);
        }
    }
    return impares;
}

function sumaImpares(impares) {
    return impares.slice().reduce((a, b) => a + b, 0);
}

function buscaValor(){
    let valor = document.getElementById('valor').value;
    let index = impares.indexOf(Number(valor));
    if ( index != -1 ) {
        escribir(`Se ha encontrado el valor ${valor} y se ha borrado`);
        impares.splice(index, 1);
        escribir('Nuevo array ' + impares.join(', '));
    } else {
        escribir(`No se ha encontrado el valor ${valor}.`)
    }
    escribir('Ascendente: ' + ordenaAscendente(impares));
    escribir('Descendente: ' + ordenaDescendente(impares));
}

function ordenaAscendente(impares) {
    return impares.sort(function (a, b) { a - b });
}

function ordenaDescendente(impares) {

    return impares.slice().sort((a, b) =>  b - a );
}

function escribir(res) {
    let p = document.createElement('p');
    p.textContent = res;
    respuesta.append(p);
}

escribir('Array de impares: ' + creaImpares(impares));
escribir('Suma: ' + sumaImpares(impares));
escribir('Inverso: ' + impares.slice().reverse());
boton.addEventListener('click', buscaValor);