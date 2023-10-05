var boton1 = document.getElementById("quest1");
var boton2 = document.getElementById("quest2");
var boton3 = document.getElementById("quest3");

var res = document.getElementById("resultado");
var resultado = "";

function coseno(){
    let num1 = prompt("Introduce el número: ")
    resultado = Math.max("1", "2");
    mostrarResultado(resultado);
}
function mostrarResultado(resultado){
    while (res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    document.getElementById("resultado").append(p);
}

boton1.addEventListener("click", coseno);