var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var frase = document.getElementById("frase");


function analizarFrase(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    let texto = frase.value.trim();
    let palabras = texto.split(" ");
    let longPalabras = palabras.length;

    let p = document.createElement("p");
    p.textContent =  `La primera palabra es "${palabras[0]}".`;
    resultado.append(p);

    let p1 = document.createElement("p");
    p1.textContent =  `La última palabra es "${palabras[longPalabras - 1]}".`;
    resultado.append(p1);

    let p2 = document.createElement("p");
    p2.textContent =  `El número de palabras que tiene la frase es ${longPalabras}.`;
    resultado.append(p2);

}

boton.addEventListener("click", analizarFrase);
