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
            pantalla.value = Math.sqrt(valor);
            break;
        case "log":
            pantalla.value = Math.log(valor);
            break;
        case "pi":
            pantalla.value = valor + Math.PI;
            break;
        case "raizcubi":
            pantalla.value = Math.pow(valor, 3);
            break;
        case "sin":
            pantalla.value = Math.sin(valor);
            break;
        case "cos":
            pantalla.value = Math.cos(valor);
            break;
        case "tan":
            pantalla.value = Math.tan(valor);
            break;
        case "raizcua":
            pantalla.value = Math.pow(valor, 2);
            break;
        case "c":
            let long = valor.length;
            pantalla.value = valor.slice(0, long - 1) ;
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
