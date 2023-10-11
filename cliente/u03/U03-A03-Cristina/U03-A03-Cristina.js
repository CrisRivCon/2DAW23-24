var res = document.getElementById("resultado");
var calcular = document.getElementById("calcular");

var fechaActual = new Date();

var miliAno = 31556900000;


function calcularTiempo(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;

    let fechaFinal = new Date(ano, mes - 1, dia);

    let intervalo = fechaActual - fechaFinal;
    let nuevoDate = new Date(intervalo);

    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = "Tienes <strong>" + anos + "</strong> años, " + meses + " meses y " + dias + " días.";
    res.append(res.appendChild(p));
}


calcular.addEventListener("click", calcularTiempo);