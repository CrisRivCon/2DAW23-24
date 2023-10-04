var res = document.getElementById("resultado");
var resultado = "";

function esPalindromo(){
    var fraseReves = "";
    let frase = prompt("Introduce la frase:");
    var fraseC = frase.replaceAll(',', '').replaceAll(' ', '');
    for (let i = fraseC.length - 1; i >= 0; i--){
        fraseReves += fraseC[i];
    }

    if(fraseC.toUpperCase() == fraseReves.toUpperCase()){
        resultado = "Es un palíndromo.";
    }else{
        resultado = "No es un palíndromo."
    }
    mostrarResultado();
}


function mostrarResultado(){
    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    res.append(p);
}

document.getElementById("boton").addEventListener("click", esPalindromo);