function descomponerFrase(){
    let frase = prompt("Introduce la frase a descomponer.");
    let res = document.getElementById("resultado");
    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    for (let i of frase){
        if (isNaN(i) || i == " "){
            let p = document.createElement("p");
            p.innerHTML = i;
            res.append(p);
        }
    }
}
document.getElementById("boton").addEventListener("click", descomponerFrase);