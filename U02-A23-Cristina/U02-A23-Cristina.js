var res = document.getElementById("resultado");
var fila = 7;
var resultado = "";
var contador = 1;
var i = 0;

for (let i = 7; i > 0; i--){
    resultado += "&nbsp".repeat(i);
    for (let i = 7; i <= 7; i++){
        resultado += "*";
    }
    resultado += "<br>";
}
/*
for (let i = 0; i <= Math.ceil(fila/2); i++){
    resultado += "&nbsp".repeat(i*2);
    resultado += "*".repeat(contador*2);
    resultado += "<br>";
    contador--;
} */
mostrarResultado();


function mostrarResultado(){
    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    res.append(p);
}