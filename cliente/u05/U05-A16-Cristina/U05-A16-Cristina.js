let submit = document.getElementById('votar');
let formulario = document.getElementById('formulario');

submit.addEventListener('click', guardarCookie);

function guardarCookie() {
    let seleccionado = document.querySelector('.votos:checked');

    if (!document.cookie) { //Si no existe, la crea.

        console.log('no existe');
        document.cookie = `${seleccionado.value}=1;`;

    } else {

        let cukis = document.cookie;
        let valor = seleccionado.value;
        let regex = new RegExp(`${valor}=[0-9]{1,3}`, 'ig');
        if (cukis.includes(seleccionado.value)) { // Si ya incluye el valor, le suma 1
            
            cukiSeparada = cukis.split(';');
            let cuki = cukis.match(regex);
            let claveValor = cuki[0].split('=');
            document.cookie = claveValor[0] + '=' + (Number(claveValor[1]) + 1);


        } else { // si no existe, lo añade.
            document.cookie = `${seleccionado.value}=1;`
        }
    }

    console.log(document.cookie);

}