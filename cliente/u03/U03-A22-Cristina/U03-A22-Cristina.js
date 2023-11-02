var agrandar = document.getElementById("agrandar");
var reducir = document.getElementById("reducir");
var original = document.getElementById("original");
var texto = document.getElementById("texto");

function agrandarTexto() {
    texto.className = "texto-grande";
}

function reducirTexto() {
    texto.className = "texto-pequeño";
}

function originalTexto() {
    texto.className = "texto-original";
}

agrandar.addEventListener("click", agrandarTexto);
reducir.addEventListener("click", reducirTexto);
original.addEventListener("click", originalTexto);