var boton = document.getElementById("boton");


function abrirVentana(){
    window.open('https://www.youtube.com/?gl=ES&hl=es', 'Nueva ventana', 'height=400, width=400');
}

boton.addEventListener("click", abrirVentana);
