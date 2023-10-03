var res = document.getElementById("resultado");
var resultado;
var num1;
var num2;

function obtenerOperadores(op){
    num1 = parseInt(prompt(`Has elegido ${op}. Introduce el primer operador`));
    num2 = parseInt(prompt(`Has elegido ${op}. Introduce el segundo operador`));
}
function sumar(){
    obtenerOperadores("sumar");
    resultado = num1 + num2;
    mostrarResultado();
}
function restar(){
    obtenerOperadores("restar");
    resultado = num1 - num2;
    mostrarResultado();
}
function multiplicar(){
    obtenerOperadores("multiplicar");
    resultado = num1 * num2;
    mostrarResultado();
}
function dividir(){
    obtenerOperadores("dividir");
    resultado = num1 / num2;
    mostrarResultado();
}
function modulo(){
    obtenerOperadores("el módulo");
    resultado = num1 + num2;
    mostrarResultado();
}
function salir(){
    let confirmacion = confirm("Seguro que quieres salir?");
    var padre = document.getElementById("padre");
    if (confirmacion){
        while(padre.hasChildNodes()){
            padre.removeChild(padre.firstChild);
        }
    }
}

function mostrarResultado(){
    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    if (isNaN(resultado)){
        resultado = "Error"
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    res.append(p);
}

document.getElementById("1").addEventListener("click", sumar);
document.getElementById("2").addEventListener("click", restar);
document.getElementById("3").addEventListener("click", multiplicar);
document.getElementById("4").addEventListener("click", dividir);
document.getElementById("5").addEventListener("click", modulo);
document.getElementById("6").addEventListener("click", salir);


