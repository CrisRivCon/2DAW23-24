var res = document.getElementById("resultado");

var fechaActual = new Date();
var horaActual = fechaActual.getHours();

function saludoEducado(){
    if (horaActual >= 12 && horaActual < 20){
        mostarResultado("Buenas tardes")
    }else if( horaActual >= 20 && horaActual < 0){
        mostarResultado("Buenas noches")
    }else{
        mostarResultado("Buenos días")
    }

   
}

function mostarResultado(saludo){
    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = saludo;
    res.append(res.appendChild(p));
}