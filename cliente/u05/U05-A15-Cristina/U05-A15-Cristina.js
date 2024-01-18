let contador = document.getElementById('contador');
window.addEventListener('load', sumarVisita);

function sumarVisita() {
    console.log('carga');
    let cuki = document.cookie;
    if (cuki) {
        let cukiSepadara = cuki.split('=');
        let visitas = cukiSepadara[1];
        document.cookie = `visita=${Number(visitas) + 1}`;
    } else {
        document.cookie = 'visita=1';
    }
    mostrarContador();
}

function mostrarContador() {
    let p = document.createElement('p');
    p.textContent = document.cookie;
    contador.append(p); 
}