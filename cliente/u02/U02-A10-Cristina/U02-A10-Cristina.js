
function tablaMultiplicar(){
    var valor1 = prompt("Introduce el número para mostrar la tabla: ");
    
    for(let i = 1; i <= 10; i++){
        document.write("<p>" + valor1 + " x " + i + " = " + valor1 * i + "</p>");
    }
}
document.getElementById("calcular").addEventListener("click", tablaMultiplicar);