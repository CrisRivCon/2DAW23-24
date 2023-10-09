var boton1 = document.getElementById("resolver");
var res = document.getElementById("resultado");
var habitacion = document.getElementById("habitacion");
var sospechoso = document.getElementById("sospechoso");

var resultado = "";
var asesinoSel = "";
var habitacionSel = "";
var arma = "";
var resuelto = false;

var habitaciones = {
    1: "el salón de baile",
    2: "la galería",
    3: "la sala de billar",
    4: "el comedor"
};
var sospechosos = {
    1: "Sr Parker",
    2: "Sra Van Cleve",
    3: "Sra Sparr",
    4: "Sr Kalehoff"
};
var solucion1 = {
    habitacion: "el salón de baile",
    arma: "veneno",
    asesino: "Sr Kalehoff"
};
var solucion2 = {
    habitacion: "la galería",
    arma: "trofeo",
    asesino: "Sra Van Cleve"
};
var solucion3 = {
    habitacion: "la sala de billar",
    arma: "palo",
    asesino: "Sra Sparr"
};
var solucion4 = {
    habitacion: "el comedor",
    arma: "cuchillo",
    asesino: "Sr Parker"
};

var soluciones = [solucion1, solucion2, solucion3, solucion4];

function obtenerHabitación(){
    var habitacionSeleccionada = habitacion.options[habitacion.selectedIndex].value;
    habitacionSel = habitaciones[habitacionSeleccionada];
}
function obtenerSospechoso(){
    var asesinoSeleccionado = sospechoso.options[sospechoso.selectedIndex].value;
    asesinoSel = sospechosos[asesinoSeleccionado];
}

habitacion.addEventListener("change", obtenerHabitación);
sospechoso.addEventListener("change", obtenerSospechoso);

function resolverAsesinato(){
    resuelto = false;
    obtenerHabitación();
    obtenerSospechoso();
    for (solu of soluciones){
        if (solu["habitacion"] == habitacionSel){
            arma = solu["arma"];
            resultado =  ` ${solu["asesino"]} lo hizo en el ${habitacionSel} con el ${arma} !`
        }
        if (solu["habitacion"] == habitacionSel && solu["asesino"] == asesinoSel){
            resuelto = true;
        }

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
    if (resuelto){
        let p = document.createElement("p");
    p.innerHTML = "Lo has resuelto!";
    document.getElementById("resultado").append(p);
    }
}


boton1.addEventListener("click", resolverAsesinato);