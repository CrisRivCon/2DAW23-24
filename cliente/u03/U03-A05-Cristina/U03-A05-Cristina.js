function mostrarHora(){
    let divHoras = document.getElementById("hora");
    let divMin = document.getElementById("minutos");
    let divSeg = document.getElementById("segundos");
    let divInd = document.getElementById("indicador");

    let fechaActual = new Date();
    let horas = fechaActual.getHours();
    let min = fechaActual.getMinutes();
    let seg = fechaActual.getSeconds();
    let indicador = "";

    
    if (horas >= "00" && horas < 12){
        indicador = "AM";
    }else{
        indicador = "PM";
    }

    horas = convertirHoras(horas);
    horas = aniadirCero(horas);
    min = aniadirCero(min);
    seg = aniadirCero(seg);
    
    mostarResultado(horas, divHoras);
    mostarResultado(min, divMin);
    mostarResultado(seg, divSeg);
    mostarResultado(indicador, divInd);

}
function convertirHoras(horas){
    return horas > 12 ? horas - 12 : horas;
}

function aniadirCero(min){
    return min < 10 ? "0" + min : min;
}

function mostarResultado(dig, res){
    res.innerHTML = dig;
}

setInterval(mostrarHora, 1000);
