var boton = document.getElementById("boton");
var res = document.getElementById("resultado");

function sumaCrifras(){
    let cifra = prompt("Introduce la cifra a sumar, para indicar los decimales utiliza el '.': ").split(".");
    let confirmacion = confirm("Quieres sumar los decimales?");
    var resultado = 0;

    for (let i = 0; i < cifra[0].length; i++){
        resultado += parseInt(cifra[0][i]);
    }

    if (confirmacion && cifra.length > 1){
        for (let i = 0; i < cifra[1].length; i++){
            resultado += parseInt(cifra[1][i]);
        }
    }

    while (res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    document.getElementById("resultado").append(p);
}
boton.addEventListener("click", sumaCrifras);