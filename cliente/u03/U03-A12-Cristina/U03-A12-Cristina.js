var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var input = document.getElementById("frase");
var inputPalabra = document.getElementById("palabra");


function comprobar(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    
    let p = document.createElement("p");
    let frase = input.value;
    let palabra = inputPalabra.value;
    let res = '';
    if (frase.includes(palabra)){
        res += `La frase contiene la palabra <strong>${palabra} </strong><br><br>`;
        let index = frase.indexOf(palabra);
        let nuevaFrase = frase.replace(palabra, 'dwecl');
        res += `La palabra se puede encontrar a partir de la posición <strong>${index + 1}</strong> <br>
                y está formada por <strong>${palabra.length}</strong> letras. <br><br>
                La nueva frase sería: <br>
                <strong> ${nuevaFrase}</strong>`;
    } else {
        res += `La frase no contiene la palabra <strong>${palabra} </strong><br><br>`;

    }


    p.innerHTML = res;
    resultado.append(p);
}

boton.addEventListener("click", comprobar);
