function descomponerNumero(){
    let numero = prompt("Introduce un número para descomponer: ");
    let res = document.getElementById("resultado");
    if (numero < 1000){
        while(res.hasChildNodes()){
            res.removeChild(res.firstChild);
        }
        for (i = 0; i < numero.length; i++){
            let p = document.createElement("p");
            p.innerHTML = numero[i];
            res.append(p);
        }
    } else {
        document.getElementById("resultado").innerHTML = "El número es mayor que 1000."
    }
}
document.getElementById("boton").addEventListener("click", descomponerNumero);