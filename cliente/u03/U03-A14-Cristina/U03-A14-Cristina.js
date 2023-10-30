var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var input = document.getElementById("hora");


function validarHora(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    
    //let hora = input.value.trim();
    let hora = "10:10:10";
    let res = '';
    console.log(hora);

    let patron = new RegExp("/^(\d{2}):(\d{2}):(\d{2})$/");
    let found = patron.test(hora);
    console.log(found);

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
