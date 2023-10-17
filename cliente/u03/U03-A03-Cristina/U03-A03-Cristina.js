var res = document.getElementById("resultado");
var calcular = document.getElementById("calcular");

var fechaActual = new Date();

function calcularTiempo(){
    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;

    let fechaFinal = new Date(ano, mes - 1, dia);

    let anos = fechaActual.getFullYear() - fechaFinal.getFullYear();
    let meses = fechaActual.getMonth() - fechaFinal.getMonth();
    let dias = fechaActual.getDay() - fechaFinal.getDay();

    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = "Tienes <strong>" + anos + "</strong> años, <strong>" + meses + "</strong> meses y <strong>" + dias + "</strong> días.";
    res.append(res.appendChild(p));
}

calcular.addEventListener("click", calcularTiempo);