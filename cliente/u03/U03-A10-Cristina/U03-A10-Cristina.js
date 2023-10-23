var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var frase = document.getElementById("frase");
var inicio = document.getElementById("inicio");
var fin = document.getElementById("fin");


function extraerFrase(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }

    let texto = frase.value.trim();
    let marcaInicio = inicio.value;
    let marcaFin = fin.value; 

    let extract = texto.slice(texto.indexOf(marcaInicio), texto.indexOf(marcaFin) + marcaFin.length);

    let p = document.createElement("p");
    p.textContent =  texto;
    resultado.append(p);

    let p1 = document.createElement("p");
    p1.textContent =  extract;
    resultado.append(p1);

}

boton.addEventListener("click", extraerFrase);
