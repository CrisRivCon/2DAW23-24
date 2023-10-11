var res = document.getElementById("resultado");
var boton = document.getElementById("boton");
var input = document.getElementById("geo");

function geometrica(){
    var acc = [5];
    let n = input.value;
    for (i = 0; i < n - 1; i++){
        acc.push(acc[i] * 3);
    }
    mostrarResultado(acc);  
}

function mostrarResultado(resultado){
    console.log(res.hasChildNodes());
    while (res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = resultado;
    document.getElementById("resultado").append(p);
}

boton.addEventListener("click", geometrica);