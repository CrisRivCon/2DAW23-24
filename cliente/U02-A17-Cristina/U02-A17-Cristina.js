var res = document.getElementById("resultado");
var resultado;
function sumar(){
    let num1 = parseInt(prompt("Has elegido la suma. Introduce el primer operador"));
    let num2 = parseInt(prompt("Has elegido la suma. Introduce el segundo operador"));
    resultado = num1 + num2;
    mostrarResultado();
}
function restar(){
    let num1 = parseInt(prompt("Has elegido la resta. Introduce el primer operador"));
    let num2 = parseInt(prompt("Has elegido la resta. Introduce el segundo operador"));
    resultado = num1 - num2;
    mostrarResultado();
}
function multiplicar(){
    let num1 = parseInt(prompt("Has elegido la multiplicación. Introduce el primer operador"));
    let num2 = parseInt(prompt("Has elegido la multiplicación. Introduce el segundo operador"));
    resultado = num1 * num2;
    mostrarResultado();
}
function division(){
    let num1 = parseInt(prompt("Has elegido la división. Introduce el primer operador"));
    let num2 = parseInt(prompt("Has elegido la división. Introduce el segundo operador"));
    resultado = num1 / num2;
    mostrarResultado();
}
function modulo(){
    let num1 = parseInt(prompt("Has elegido el módulo. Introduce el primer operador"));
    let num2 = parseInt(prompt("Has elegido el módulo. Introduce el segundo operador"));
    resultado = num1 + num2;
    mostrarResultado();
}
function salir(){
    let confirmacion = confirm("Seguro que quieres salir?");
    if (confirmacion){
        
    }
}

function mostrarResultado(){
    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    res.append(p);
}

document.getElementById("1").addEventListener("click", sumar);
document.getElementById("2").addEventListener("click", restar);
document.getElementById("3").addEventListener("click", multiplicar);
document.getElementById("4").addEventListener("click", division);
document.getElementById("5").addEventListener("click", modulo);
document.getElementById("6").addEventListener("click", salir);


