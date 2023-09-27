document.getElementById("calcular").addEventListener("click", multiplos8);

function multiplos8(){
    var valor1 = prompt("Introduce el primer valor: ");
    var valor2 = prompt("Introduce el segundo valor: ");
    var min = Math.min(valor1, valor2);
    var max = Math.max(valor1, valor2);
    var multi = "";
    while(min <= max){
        if(min % 8 == 0){
            multi = multi + " " + min;
        }
        min ++;
    }



    document.getElementById('res').innerHTML = "Los múltiplos de 8 son" + multi;
}