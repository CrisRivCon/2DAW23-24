const ZONAS  = {
    '-12': "UTC -12 : Línea internacional de fecha del oeste",

    '-11': "UTC -11 : Isla Midway, Samoa",

    '-10': "UTC -10 : Hawai",

    '-9': "UTC -9 : Alaska",

    '-8': "UTC -8 : Hora del pacífico (USA y Canadá)",

    '-7': "UTC -7 : Hora de las montañas rocosas (USA y Canadá)",

    '-6': "UTC -6 : América central",

    '-5': "UTC -5 : Hora central (USA y Canadá)",

    '-4': "UTC -4 : Hora del Atlántico (Canadá)",

    '-3': "UTC -3 : Buenos Aires, Asunción, Brasilia, Montevideo",

    '-2': "UTC -2 : Atlántico central",

    '-1': "UTC -1 : Azores",

    '0': "UTC 0 : Hora del meridiano de Greenwich, Londres, Dublín",

    '1': "UTC +1 : París, Madrid, Barcelona, Roma",

    '2': "UTC +2 : El Cairo",

    '3': "UTC +3 : Nairobi",

    '4': "UTC +4 : Bakú",

    '5': "UTC +5 : Ekaterimburgo",

    '6': "UTC +6 : Astana",

    '7': "UTC +7 : Bangkok",

    '8': "UTC +8 : Ulán Bator",

    '9': "UTC +9 : Tokio",

    '10' : "UTC +10 : Sidney",

    '11': "UTC +11 : Islas Salomón",

    '12': "UTC +12 : Wellington",
    }

var select = document.getElementById("select");
var boton = document.getElementById("boton");
var resultado = document.getElementById("resultado");

function mostrarZonas(ZONAS){
Object.entries(ZONAS).forEach(([key, values]) => {
    let op = document.createElement("option");
    op.setAttribute("value", key);
    op.textContent = values;
    select.append(op);
})
}

function calcularHora(){
    let fecha = new Date();

    let valor = select.options[select.selectedIndex].value;
    fecha.setHours(fecha.getHours() + valor);
    let hora = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds()
    resultado.textContent = `Son las ${hora}:${min}:${seg}`;
}
mostrarZonas(ZONAS);
boton.addEventListener("click", calcularHora);