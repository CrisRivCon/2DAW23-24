var respuesta = document.getElementById('respuesta');

function Vehiculo(marca, modelo, color, anioFabricacion, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anioFabricacion = anioFabricacion;
    this.mostrarDatos = mostrarDatos;
    this.acelerar = acelerar;
    this.arrancar = function () {
        return `El coche de marca ${this.marca}, modelo ${this.modelo}, de color ${this.color} ha arrancado.`;
    }
}

function mostrarDatos() {
    escribir(this.marca);
    escribir(this.modelo);
    escribir(this.color);
    escribir(this.anioFabricacion);
}

function acelerar(velocidad) {
    return 'El coche ha acelerado a ' + velocidad + 'km/h.';
}

function frenar() {
    return `El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha frenado.`;

}

Vehiculo.prototype.cilindrada = 10;
Vehiculo.prototype.frenar = frenar;

let vehiculo1 = new Vehiculo('honda', 'nose', 'rojo', 2023);
let vehiculo2 = new Vehiculo('ford', 'focus', 'gris', 2022);


function escribir(res, contenedor = respuesta) {
    let p = document.createElement('p');
    p.textContent = res;
    contenedor.append(p);
}

escribir('4. ' + vehiculo1.marca);
escribir('5. ' + vehiculo2['color']);
escribir('6. ');
vehiculo2.mostrarDatos();
escribir('7. ' + vehiculo1.acelerar(10));
escribir('8. ' + vehiculo1.arrancar());
escribir('10. ' + vehiculo1.frenar());


let propiedades = []
for (let propiedad in vehiculo1) {
    propiedades.push(propiedad);
}

escribir('11. For in: ' + propiedades); 
escribir('Object.getOwnPropertyNames: ' + Object.getOwnPropertyNames(vehiculo1)); 
escribir('Object.keys: ' + Object.keys(vehiculo1)); 