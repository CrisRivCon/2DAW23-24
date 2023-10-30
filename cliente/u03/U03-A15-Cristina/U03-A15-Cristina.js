var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var input = document.getElementById("input");


function validarMatricula(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    
    let hora = input.value.trim();
    let res = '';

    let patron = /^\d{4}\s[A-Z]{3}$/;
    let found = patron.test(hora);

    if (patron.test(hora)){
        res += `Formato <strong>correcto</strong><br><br>`;
        
    } else {
        res += `Formato <strong>incorrecto</strong><br><br>`;

    }

    
    let p = document.createElement("p");
    p.innerHTML = res;
    resultado.append(p);
}

boton.addEventListener("click", validarMatricula);
