var resultado = document.getElementById("resultado");
var objetos = document.getElementById("objetos");
var objetosTrue = [new Boolean('Hola'), new Boolean(2), new Boolean(Date()), new Boolean([]), new Boolean({})]
var objetosTrueStr = ["new Boolean('Hola')", "new Boolean(2)", "new Boolean(Date())", "new Boolean([])", "new Boolean({})"];
var objetosFalse = [new Boolean(undefined), new Boolean(null), new Boolean(0), new Boolean(NaN), new Boolean("")]
var objetosFalseStr = ["new Boolean(undefined)", "new Boolean(null)", "new Boolean(0)", "new Boolean(NaN)", "new Boolean('')"];

function mostrarObjetos(){
    let resTrue = ""
    let resFalse = ""
    for (let index = 0; index < objetosTrue.length; index++) {
        resTrue += objetosTrueStr[index] + " -> " + objetosTrue[index] + "<br>";
        resFalse += objetosFalseStr[index] + " -> " + objetosFalse[index] + "<br>";

    }
    let p = document.createElement("p");
    p.innerHTML = resTrue; 
    resultado.append(p);

    let p1 = document.createElement("p");
    p1.innerHTML = resFalse; 
    resultado.append(p1);
}
mostrarObjetos();
