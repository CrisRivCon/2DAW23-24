var res = document.getElementById("resultado");
var fechaActual = new Date();
var fechaFinal = new Date("December, 31, 2023");

function calcularTiempo(fechaActual, fechaFinal){
    let intervalo = fechaFinal - fechaActual;
    let interMili = intervalo;
    let interDias = intervalo / 86400000;

    let p = document.createElement("p");
    p.innerHTML = "Quedan <strong>" + Math.trunc(interDias) + "</strong> días para final de año";
    res.append(res.appendChild(p));

    let p2 = document.createElement("p");
    p2.innerHTML = "Quedan <strong>" + interMili + "</strong> milisegundos para final de año.";
    res.append(res.appendChild(p2));
}

calcularTiempo(fechaActual, fechaFinal);