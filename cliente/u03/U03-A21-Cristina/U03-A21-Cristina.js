var boton = document.getElementById("boton");
var botonCaracteristicas = document.getElementById("botonCaracteristicas");
var botonDimHerramientas = document.getElementById("dimHerramientas");
var botonPantalla = document.getElementById("pantalla");
var color = document.getElementById("color");
var res = document.getElementById("respuesta");

function cambiarColor() {

    let col = color.options[color.selectedIndex].value;
    let cuerpo = document.getElementById("cuerpo");
    cuerpo.className = col;
}

function mostrarCaracteristicas() {
    let respuesta = "javaEnabled() -> " + navigator.javaEnabled() + "<br>";
    respuesta += "appCodeName -> " + navigator.appCodeName + "<br>";
    respuesta += "appName -> " + navigator.appName + "<br>";
    respuesta += "appVersion -> " + navigator.appVersion + "<br>";
    respuesta += "cookieEnable -> " + navigator.cookieEnabled + "<br>";
    respuesta += "platform -> " + navigator.platform + "<br>";
    respuesta += "userAgent -> " + navigator.userAgent + "<br>";
    respuesta += "language -> " + navigator.language + "<br>";
    respuesta += "product -> " + navigator.product + "<br>";
    respuesta += "plugins -> ";
    for (ele of navigator.plugins) {
        respuesta += ele.name + " ";
    }
    escribir(respuesta);
}

function escribir(respuesta) {
    while (res.hasChildNodes()) {
        res.removeChild(res.firstChild);
    }
    let p = document.createElement("p");
    p.innerHTML = respuesta;
    res.append(p);
}

function mostrarInformacionPantalla() {
    let respuesta = "Altura de pantalla -> " + screen.availHeight + "<br>";
    respuesta += "Ancho de pantalla -> " + screen.availWidth + "<br>";
    respuesta += "Paleta de bits -> " + screen.colorDepth + "<br>";
    respuesta += "Altura total -> " + screen.height + "<br>";
    respuesta += "Anchura total -> " + screen.width + "<br>";
    escribir(respuesta);
}
function mostrarDimensiones() {
    let altura = window.outerHeight - window.innerHeight; 
    let ancho = window.outerWidth;
    let respuesta = `La altura de la barra de herramientas es ${altura}
                    y el ancho es ${ancho}`;
    escribir(respuesta);
}

botonCaracteristicas.addEventListener("click", mostrarCaracteristicas);
boton.addEventListener("click", cambiarColor);
botonDimHerramientas.addEventListener("click", mostrarDimensiones);
botonPantalla.addEventListener("click", mostrarInformacionPantalla);