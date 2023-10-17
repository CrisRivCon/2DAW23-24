var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");

function mostrarAleatorios(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    for (let i = 1 ; i < 11; i++){
        let p = document.createElement("p");
        p.textContent = i + " - " + Math.trunc(Math.random() * 21);
        resultado.append(p);
    }
}
boton.addEventListener("click", mostrarAleatorios);