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

function escribir(res, contenedor = respuesta) {
    contenedor.append(res);
}

let vehiculos = [vehiculo1, vehiculo2];

function crearTabla(objetos) {
    let tabla = document.createElement('table');
    let trh = document.createElement('thead');

    objetos.forEach(element => {
        let tr = document.createElement('tr');

        for (propiedad in element) {
            if (typeof element[propiedad] === 'function' ) {
                continue;
            }
            if (element == vehiculos[0]) {
                let th = document.createElement('th');
                th.textContent = propiedad.toUpperCase();
                trh.append(th);
            }
                let td = document.createElement('td');
                td.textContent = element[propiedad];
                tr.append(td);
        }

        tabla.append(tr);
    });

    tabla.append(trh);
    return tabla;
}

escribir(crearTabla(vehiculos));