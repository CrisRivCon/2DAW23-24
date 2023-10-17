var boton = document.getElementById("boton");
var boton2 = document.getElementById("boton2");
var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById("resultado2");

function calcularArea(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    let radio = document.getElementById("radio").value;
    let area = Math.PI * Math.pow(radio, 2);
    let p = document.createElement("p");
    p.textContent =  `El área de un círculo es ${area.toFixed(2)} cm2`;
    resultado.append(p);

}
function calcularAreaTrian(){
    while (resultado2.hasChildNodes()) {
        resultado2.removeChild(resultado2.firstChild);
    }
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;
    let area = base * altura / 2;
    let p = document.createElement("p");
    p.textContent =  `El área de un triángulo es ${area.toFixed(2)} cm`;
    resultado2.append(p);

}
boton.addEventListener("click", calcularArea);
boton2.addEventListener("click", calcularAreaTrian);
