var respuesta = document.getElementById('respuesta');
var vector = [];

function vectorRandom(vector) {
    for (let i = 0; i < 10 ; i++) {
        vector.push(Math.trunc(Math.random() * 1000));
    }
    escribir(vector.join(', '));
}

Array.prototype.fueraPrimeroUltimo = function nuevoVector() {
    let nuevoVector = this.slice();
    nuevoVector.sort(function (a, b) { return a - b });
    nuevoVector.pop();
    nuevoVector.shift();
    escribir(nuevoVector.join(', '));
}

function escribir(res) {
    let p = document.createElement('p');
    p.textContent = res;
    respuesta.append(p);
}

vectorRandom(vector);
let max = Math.max(...vector);
let min = Math.min(...vector);
escribir(`El máximo es ${max}`);
escribir(`El mínimo es ${min}`);

vector.fueraPrimeroUltimo();