var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var input = document.getElementById("hora");


function validarHora(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    
    let hora = input.value.trim();
    let res = '';

    let patron = /^(([0-1][0-9])|(2[0-3])):([0-5][0-9])(:([0-5][0-9]))?$/;
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

boton.addEventListener("click", validarHora);