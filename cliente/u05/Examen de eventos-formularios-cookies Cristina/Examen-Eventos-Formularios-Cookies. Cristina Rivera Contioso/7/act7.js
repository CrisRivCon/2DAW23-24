const botonVer = document.getElementById('ver');
const botonGuardar = document.getElementById('guardar');
const dni = document.getElementById('dni');
const formulario = document.getElementById('formulario');

botonVer.addEventListener('click', () => {
    if (dni.type == 'text'){
        dni.type = 'password';
    } else {
        dni.type = 'text';
    }
});

botonGuardar.addEventListener('click', (e) => {
    let inputs = formulario;
    for( i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()){
            inputs[i].value = '';
        }
    }
});
