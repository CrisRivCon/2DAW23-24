function showPrompt(){
    // Introduce texto por el prompt, añade con innerHTML al documento y 
    // convierte en entero si lo que se introduce es un número.

    text = prompt("Escribe un número:");
    if (text.match( /^[0-9]+$/)) {
        document.getElementById("text").innerHTML = "Texto del prompt con ParseInt: " + parseInt(text);
    } else {
        document.getElementById("text").innerHTML = "No es un número"
    }
}


function showAlert() {
    // Muestra una alerta con el texto "Hola"
    alert("Hola!");
}


function showConsole() {
    // Muestra por consola el texto "Hola!"
    console.log("Hola!");
}



function rewrite() {
    // Se utiliza el método write para crear texto
    document.write("<h1>Se ha incluido texto con el método document.write()</h1>");
}


function showConfirm() {
    // Aparece una ventana de confirmación
    confirm("Ventana de confirmación");
}



document.getElementById("prompt").addEventListener("click", showPrompt);
document.getElementById("alert").addEventListener("click", showAlert);
document.getElementById("console").addEventListener("click", showConsole);
document.getElementById("write").addEventListener("click", rewrite);;
document.getElementById("confirm").addEventListener("click", showConfirm);



