let submit = document.getElementById('votar');
let formulario = document.getElementById('formulario');


submit.addEventListener('click', guardarCookie);
window.addEventListener('load', actualizarGrafico);

function guardarCookie() {
    let seleccionado = document.querySelector('.votos:checked');
    let cukis = document.cookie;
    let valorInput = seleccionado.value;
    
    if (!cukis) { //Si no existe, la crea.

        document.cookie = `${seleccionado.value}=1;`;

    } else { // Si existe, la modifica

        if (cukis.includes(seleccionado.value)) {
            let regex = new RegExp(`${valorInput}=[0-9]{1,3}`, 'ig');
            let cuki = cukis.match(regex);
            let claveValor = cuki[0].split('=');
            let votos = Number(claveValor[1]) + 1
            document.cookie = claveValor[0] + '=' + votos;

        } else { // si no existe, lo añade.

            document.cookie = `${seleccionado.value}=1;`
        }
    }

    actualizarGrafico();
}

function actualizarGrafico() {
    let barras = document.querySelectorAll('.barra');
    let cukis = document.cookie;

    if (!document.cookie) {
        return;
    }

    barras.forEach(barra => {
        let regex = new RegExp(`${barra.id}=[0-9]{1,3}`, 'ig');    
        let cuki = cukis.match(regex);

        if (cuki != null) {
            let claveValor = cuki[0].split('=');
            let votos = claveValor[1];
            barra.value = votos;
        }
    });

}