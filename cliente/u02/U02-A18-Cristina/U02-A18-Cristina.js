var valores = [true, 5, false, "hola", "adios", 2];
var res = document.getElementById("resultado");
var cadenas = [];
var suma = 0;
var multi = 1;
var bol = [];

while(res.hasChildNodes()){
    res.removeChild(res.firstChild);
}

valores.forEach(element => {
    if (typeof(element) == "string"){
        cadenas.push(element);
    }
    if(typeof(element) == "number"){
        suma += element;
        multi *= element;
    }
    if(typeof(element) == "boolean"){
        bol.push(element);
    }
});

function compararCadenas(cadenas){
    let resultado = "";
    resultado = cadenas[0].length > cadenas[1].length ? cadenas[0] : cadenas[1];
    resultado = "<strong>" + resultado + "</strong>" + " es la palabra más larga."
    mostrarResultado(resultado);
}

function mostrarResultado(resultado){
    
    let p = document.createElement("p");
    p.innerHTML = resultado;
    res.append(p);
}

compararCadenas(cadenas);
mostrarResultado("<strong>" + (bol[0] && bol [1]) + "</strong>" + " Es el resultado de operación and");
mostrarResultado("<strong>" + (bol[0] || bol[1]) + "</strong>" + " Es el resultaado de operación or");
mostrarResultado("<strong>" + suma + "</strong>" + " Es el resultado de sumar los elementos numéricos");
mostrarResultado("<strong>" + multi + "</strong>" + " Es el resultado de multiplicar los elementos numéricos");

