var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var texto = document.getElementById("texto");


function sacarPalabras(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }

    let text = texto.value.trim();

    let patron = /^[A-Z]\w+|(?<=[\.\!\?]\s)[A-Z]\w+|(?<=[\.\!\?]\s)[A-Z]/gm;
    let palabras = text.match(patron);

    let res = palabras.toString().replaceAll(',', ', ');
    
    let p = document.createElement("p");
    p.innerHTML = res;
    resultado.append(p);
}

boton.addEventListener("click", sacarPalabras);
