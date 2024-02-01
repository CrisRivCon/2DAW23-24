let submit = document.getElementById('votar');
let formulario = document.getElementById('formulario');
let contenedor = document.getElementById('contenedor');


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

function getValueCookie(nombre) {
    const regex = new RegExp(`${nombre}=.*;?`, 'ig');
    let match = document.cookie.split(';').find((ele) => ele.match(regex));
    let valor = decodeURIComponent(match).split('=');
    return valor[1];
}

function actualizarGrafico() {
    let barras = document.querySelectorAll('.barra');
    let valorTotal = 0;
    if (!document.cookie) {
        return;
    }

    barras.forEach(barra => {
        let cuki = getValueCookie(barra.id);

        if (cuki != null) {
            barra.value = cuki;
            valorTotal = Number(valorTotal) + Number(cuki);
            console.log(cuki);
            console.log(valorTotal);
        }
        
    });
    while (contenedor.hasChildNodes()) {
        contenedor.removeChild(contenedor.firstChild);
    }
    barras.forEach(barra => {
        barra.max = valorTotal;
        let cuki = getValueCookie(barra.id);
        
        escribir('Votos ' + barra.id +': '+ cuki +' - '+ cuki * 100 / valorTotal + '%');
    });
}

function escribir(valor){
    
    let p = document.createElement('p');
    p.textContent = valor;
    contenedor.append(p);
}