var botones = document.getElementsByTagName("button");
var pantalla = document.getElementById("pantalla");
pantalla.value = null;

for (let i = 0; i < botones.length; i++) {
    let boton = document.getElementById(botones[i].id);
    boton.addEventListener("click", calculadora);
}

function calculadora(e) {
    let id = e.target.id;
    let valor = pantalla.value;

    if (!isNaN(id)) {
        pantalla.value = valor + id;
    }
    console.log(id);
    switch (id) {
        case "punto":
            pantalla.value = valor + ".";
            break;
        case "suma":
            pantalla.value = valor + "+";
            break;
        case "resta":
            pantalla.value = valor + "-";
            break;
        case "multiplicar":
            pantalla.value = valor + "*";
            break;
        case "dividir":
            pantalla.value = valor + "/";
            break;
        case "raiz":
            pantalla.value = valor + '&#8730;';
            break;
        case "suma":
            pantalla.value = valor + "+";
            break;
        case "resta":
            pantalla.value = valor + "-";
            break;
        case "multiplicar":
            pantalla.value = valor + "*";
            break;
        case "dividir":
            pantalla.value = valor + "/";
            break;
        case "c":
            pantalla.value = null;
            break;
        case "del":
            pantalla.value = null;
            break;    
        case "igual":
            pantalla.value = eval(valor);
            break;

        default:
            break;
    }
}
