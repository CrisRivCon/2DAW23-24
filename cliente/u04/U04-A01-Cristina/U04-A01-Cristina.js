var respuesta = document.getElementById('respuesta');
var arrayAsociativo = new Array();
arrayAsociativo.par2 = 'val2';
arrayAsociativo.par1 = 'val1';
arrayAsociativo.par3 = 'val3';

function ordenarArray(arrayAsociativo) {
    var propiedades = [];
    var arrayOrdenado = [];

    escribir('Desordenado: ');

    for (propiedad in arrayAsociativo) {
        propiedades.push(propiedad);
        escribir(arrayAsociativo[propiedad]);
    }

    escribir('Ordenado: ')

    for (propiedad of propiedades.sort()) {
        arrayOrdenado[propiedad] = arrayAsociativo[propiedad];
    }

    for (propiedad in arrayOrdenado) {
        propiedades.push(propiedad);
        escribir(arrayAsociativo[propiedad]);
    }
}

function escribir(res) {
    let p = document.createElement('p');
    p.textContent = res;
    respuesta.append(p);
}

ordenarArray(arrayAsociativo);