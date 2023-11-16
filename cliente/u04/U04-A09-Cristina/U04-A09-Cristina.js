var respuesta = document.getElementById('respuesta');

function Vehiculo(marca, modelo, color, anioFabricacion, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anioFabricacion = anioFabricacion;
    this.mostrarDatos = mostrarDatos;
    this.acelerar = acelerar;
    this.arrancar = arrancar;
}

function mostrarDatos() {
    escribir(this.marca);
    escribir(this.modelo);
    escribir(this.color);
    escribir(this.anioFabricacion);
}

function acelerar(velocidad) {
    escribir('El coche ha acelerado a ' + velocidad + 'km/h.');
}

function arrancar() {
    escribir(`El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha arrancado.`);
}

function frenar() {
    escribir(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha frenado.`);

}

Vehiculo.prototype.cilindrada = 10;
Vehiculo.prototype.frenar = frenar;

let vehiculo1 = new Vehiculo('honda', 'nose', 'rojo', 2023);
let vehiculo2 = new Vehiculo('ford', 'focus', 'gris', 2022);

for (x in Vehiculo.keys()) {
    console.log('s');
    escribir(x);
}

function escribir(res, contenedor = respuesta) {
    let p = document.createElement('p');
    p.textContent = res;
    contenedor.append(p);
}

escribir('4. ' + vehiculo1.marca);
escribir('5. ' + vehiculo2['color']);
