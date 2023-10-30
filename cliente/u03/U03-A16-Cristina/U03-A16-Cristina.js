var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var input = document.getElementById("input");


function validarMatricula(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    
    let hora = input.value.trim();
    let res = '';

    let patron = /^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s(([0-2]?[0-9])|3[0-1])$/i;
    let found = patron.test(hora);

    if (patron.test(hora)){
        res += `Expresión <strong>válida.</strong><br><br>`;
        
    } else {
        res += `Expresión <strong>no válida.</strong><br><br>`;

    }

    
    let p = document.createElement("p");
    p.innerHTML = res;
    resultado.append(p);
}

boton.addEventListener("click", validarMatricula);
