document.getElementById("calcular").addEventListener("click", factorial);

function factorial(){
    var valor = prompt("Introduce valor: ");
    let fact = 1;
    for (let i = valor; i >= 1; i--){
        fact = fact * i;
    }

    document.getElementById('res').innerHTML = "El factorial de " + valor + " es " + fact;
}