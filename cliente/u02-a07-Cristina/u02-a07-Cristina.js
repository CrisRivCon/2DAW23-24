function devuelveResultado(res) {
    document.getElementById("resultado").innerHTML = res;
}
function nota() {
    var resultado = prompt("Intruduce la nota del examen: ");
    var res = (resultado >= 0 && resultado < 5) ? "Suspenso" : 
    (resultado >= 5 && resultado < 7) ? "Aprobado" : 
    (resultado >= 7 && resultado < 9) ? "Notable" : 
    (resultado >= 9 && resultado <= 10) ? "Sobresaliente" : 
    "Nota no válida.";
    
    devuelveResultado(res);
    
}