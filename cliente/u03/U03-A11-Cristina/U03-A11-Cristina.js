var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");
var input = document.getElementById("frase");


function comprobar(){
    while (resultado.hasChildNodes()) {
        resultado.removeChild(resultado.firstChild);
    }
    
    let p = document.createElement("p");
    let str = input.value;
    let res = '';

    if (str == str.toUpperCase()) {
        res = 'Todo mayúsculas.'
    } else if (str == str.toLowerCase()) {
        res = 'Todo minúsculas.'
    } else {
        res = 'Es una mezcla de mayúsculas y minúsculas.'
    }

    p.textContent = res;
    resultado.append(p);
}

boton.addEventListener("click", comprobar);
