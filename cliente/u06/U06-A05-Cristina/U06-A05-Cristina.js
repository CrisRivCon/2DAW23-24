const botones = document.querySelectorAll('button');

botones.forEach((boton, i) => {
    boton.addEventListener('click', (e) =>{
        let p = document.getElementById('parrafo' + (i + 1));
        p.classList.toggle('invisible');
    });
});

const boton = document.getElementById('boton-ocultar');
const texto = document.getElementById('texto');
boton.addEventListener('click', () => {
    let numero = texto.value;
    let p = document.getElementById('parrafo' + numero);
    p.classList.toggle('invisible');
});