var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var input = document.getElementById("frase");


function analizarFrase(){

    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    let frase = input.value.trim();
    let palabras = frase.split(" ");
    let numPalabras = palabras.length;

    let p = document.createElement("p");
    p.textContent =  `La primera palabra es "${palabras[0]}".`;
    resultado.append(p);

    let p1 = document.createElement("p");
    p1.textContent =  `La última palabra es "${palabras[numPalabras - 1]}".`;
    resultado.append(p1);

    let p3 = document.createElement("p");
    p3.textContent =  `El número de palabras es ${numPalabras}".`;
    resultado.append(p3);

}

boton.addEventListener("click", analizarFrase);
