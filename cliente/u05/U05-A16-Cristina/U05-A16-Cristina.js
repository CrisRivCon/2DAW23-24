let submit = document.getElementById('votar');
let formulario = document.getElementById('formulario');

submit.addEventListener('click', guardarCookie);

function guardarCookie() {
    let seleccionado = document.querySelector('.votos:checked');

    if (!document.cookie) { //Si no existe, la crea.

        console.log('no existe');
        document.cookie = `${seleccionado.value}=1;`;

    } else {

        let cuki = document.cookie;
        let valor = seleccionado.value;
        let regex = new RegExp(`${valor}=[0-9]{1,3};?`, 'igm');
        console.log(regex);
        console.log(regex.test('android=1; windows=1; otro=1'));
        if (cuki.includes(seleccionado.value)) { // Si ya incluye el valor, le suma 1
            
            cukiSeparada = cuki.split(';');
            
            cukiSeparada.forEach(cukis => {
                valorese = cukis.split('=');
                console.log(valorese);
                if (valorese[0].trim() == seleccionado.value) {
                    let nuevoValor = Number(valorese[1]) + 1;
                    console.log('nuevo' + nuevoValor);
                    document.cookie = cuki.replace(regex, `${valor}=${nuevoValor};`); 
                }
            });

        } else { // si no existe, lo añade.
            document.cookie = `${seleccionado.value}=1;`
        }
    }

    console.log(document.cookie);

}