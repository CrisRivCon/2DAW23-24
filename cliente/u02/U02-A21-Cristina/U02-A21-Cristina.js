var boton1 = document.getElementById("quest1");
var res = document.getElementById("resultado");
var resultado = "";

function sumaConcatenacion(){
    var num1 = prompt("Introduce el primer número: ");
    var num2 = prompt("Introduce el segundo número: ");
    if (isNaN(num1) || isNaN(num2)){
        mostrarResultado("Error")
    }if(num1 == 0 && num2 == 0){
        suma = parseInt(num1) + parseInt(num2);
        resultado = suma.toString();
        resultado = resultado + " <br>el resultado pasado a booleano sería " + Boolean(suma);
        mostrarResultado(resultado);
    }else{
        suma = parseInt(num1) + parseInt(num2);
        resultado = suma.toString() + suma.toString();
        resultado = resultado + " <br>el resultado pasado a booleano sería " + Boolean(resultado);
        mostrarResultado(resultado);
    }
}

function mostrarResultado(resultado){
    while (res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    document.getElementById("resultado").append(p);
}

boton1.addEventListener("click", sumaConcatenacion);