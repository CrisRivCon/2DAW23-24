function showPrompt(){
    // Introduce texto por el prompt y añade con innerHTML.

    text = prompt("Escribe un número:");
    if (text.match( /^[0-9]+$/)) {
        document.getElementById("text").innerHTML = "Texto del prompt con ParseInt: " + parseInt(text);
    } else {
        document.getElementById("text").innerHTML = "No es un número"
    }
}

document.getElementById("prompt").addEventListener("click", showPrompt);

function showAlert() {
    // Muestra una alerta con el texto "Hola"

    alert("Hola!");
}

document.getElementById("alert").addEventListener("click", showAlert);

function showConsole() {
    // Muestra por consola el texto "Hola!"

    console.log("Hola!");
}

document.getElementById("console").addEventListener("click", showConsole);


function rewrite() {
    document.write("<h1>Se ha borrado todo por el método document.write()</h1>");
}

document.getElementById("write").addEventListener("click", rewrite);;

function showConfirm() {
    

    confirm("Ventana de confirmación");
}

document.getElementById("confirm").addEventListener("click", showConfirm);



