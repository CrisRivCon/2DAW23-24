function descomponerNumero(){
    let numero = prompt("Introduce un número para descomponer: ");
    if (numero < 1000){
        for (i = 0; i < numero.length; i++){
            document.write("<p" + numero[i] + "</p>");
        }
    } else {
        document.getElementById("resultado").innerHTML = "El número es mayor que 1000."
    }
}
document.getElementById("boton").addEventListener("click", descomponerNumero);