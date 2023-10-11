var boton = document.getElementById("boton");
var res = document.getElementById("resultado");
var pass = "aireacondicionado";
var resultado = "";

function comprobarPass(){
    let pass2 = prompt("Introduce la contraseña: ");
    if (pass == pass2){
        resultado = "Bienvenida!";
    }else{
        comprobarPass();
    }
    mostrarResultado(resultado);
}
function mostrarResultado(resultado){
    while (res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    document.getElementById("resultado").append(p);
}

boton.addEventListener("click", comprobarPass);