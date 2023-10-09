var res = document.getElementById("resultado");
var boton = document.getElementById("boton");
var input = document.getElementById("fib");
var resultado = 1;

function fibonacci(){
    var acc = [1, 1];
    let n = input.value;
    for (i = 0; i < n - 2; i++){
        acc.push(acc[i] + acc[i + 1]);
        resultado = acc;
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

boton.addEventListener("click", fibonacci);