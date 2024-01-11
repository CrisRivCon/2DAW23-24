let google = document.getElementById('google');
let asignatura = document.getElementById('asignatura');
let formulario = document.getElementById('formulario');

let dias = document.getElementsByClassName('dias');
let preferente = document.getElementById('preferente');
let preHidden = document.getElementById('preferente-hidden');
let seleccionados = [];

// Actividad 8
function redirigir() {
    window.location.href = 'https://www.google.es';
}

google.addEventListener('click', redirigir);


//Actividad 9
asignatura.addEventListener('change', e => {
    let valor = asignatura[asignatura.options['selectedIndex']].value;
    formulario.action = `mailto:${EMAIL[valor]}?subject=Formulario`;
});

//Actividad 10
for ( i = 0; i < dias.length; i++){
    dias[i].addEventListener('change', cambiarPreferente)
}

function cambiarPreferente(){
    dias.length == 1 ? seleccionar(dias[0].value) : seleccionarUltimo(dias);
}

function seleccionarUltimo(dias) {
    for ( i = 0; i < dias.length; i++){
        if (dias[i].checked) {
            seleccionados.push(i);
        }
    }
    preferente.selectedIndex = seleccionados.pop();
    preHidden.value = preferente.value;
}