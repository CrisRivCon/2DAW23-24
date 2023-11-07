var boton = parent.marco2.document.getElementById('boton');
var color = parent.marco1.document.getElementById('color');
var lado = parent.marco1.document.getElementById('lado');

function cambiarColor() {
    let col = color.options[color.selectedIndex].value;
    let la = lado.options[lado.selectedIndex].value;
    let cambiar;
    if (la == 'izq') {
        cambiar = parent.marco1.document.getElementById(la);
    } else {
        cambiar = parent.marco2.document.getElementById(la);
    }
    cambiar.className = col;
}

boton.addEventListener("click", cambiarColor);