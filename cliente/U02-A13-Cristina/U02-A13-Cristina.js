var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var dic = {
    1: 'uno', 
    2 : 'dos', 
    3 : 'tres', 
    4 : 'cuatro', 
    5 : 'cinco'};
var res;
function mostrarLiterales(){
    let num = parseInt(prompt("Introduce un número del 1 al 5:"));
    if (num > 0 && num <= 5){
        res = dic[num];
    }else{
        res = "Número no válido."
    }

    while(resultado.hasChildNodes()){
        resultado.removeChild(resultado.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = res;
    resultado.append(p);
}
boton.addEventListener("click", mostrarLiterales);