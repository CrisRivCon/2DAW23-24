var boton = document.getElementById("boton");

function mostrarPantalla(res, texto){
    while(res.hasChildNodes()){
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = texto;
    res.append(p);
}

function traductor(){
    let palabra = prompt("Introduce la palabra a traducir:");
    var res = document.getElementById("resultado");
    switch (palabra.toLocaleLowerCase()) {
        case "casa":
            mostrarPantalla(res, "house");
            break;

        case "mesa":
            mostrarPantalla(res, "table");
            break;

        case "perro":
            mostrarPantalla(res, "dog");
            break;

        case "gato":
            mostrarPantalla(res, "cat");
            break;

        default:
            mostrarPantalla(res, "Palabra no válida.");
            break;
    }
}

boton.addEventListener("click", traductor);