var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var frase = document.getElementById("frase");


function analizarFrase(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    frase = frase.value;
    let palabras = frase.split(" ");
    console.log(palabras);

    let p = document.createElement("p");
    p.textContent =  `La primera palabra es "${palabras[0]}".`;
    resultado.append(p);

    let p1 = document.createElement("p");
    p1.textContent =  `La primera palabra es "${palabras[0]}".`;
    resultado.append(p1);

}

boton.addEventListener("click", analizarFrase);
