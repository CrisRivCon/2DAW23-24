var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L','C', 'K', 'E', 'T'];
var mensaje;
function comprobarDNI(){
        let dniCompleto = prompt("Introduce el DNI con letra (8 digitos y 1 letra): ");
        let dni = dniCompleto.substring(0, 8);

        if (dni > 0 && dni < 99999999 ){
            let letra = dniCompleto.substring(8, 9);
            let resto = dni % 23;

            if ( letra.toUpperCase() == letras[resto]){
                mensaje = "El número del DNI y la letra son correctos.";
            }else{
                mensaje = "El número del DNI y la letra NO son correctos.";
            }

        }else{
            mensaje = "El número indicado no es válido.";
        }

        mostrarEnPantalla(mensaje);
}

function mostrarEnPantalla(contenido){
    document.getElementById("resultado").innerHTML = contenido;
}

document.getElementById('boton').addEventListener("click", comprobarDNI);