/**
 * @fileoverview Práctica para el examen del tema 5 de JavaScript
 * @author Cristina Rivera Contioso
 */


const imagen = document.getElementById('imagen');

imagen.addEventListener('mousedown', cambiarImagen);
document.addEventListener('mouseup', volverImagen);


/* imagen.ondragstart = function() {
    return false;
} */

function cambiarImagen() {
    imagen.src = 'gato(3).png';
    imagen.addEventListener('mousemove', moverImagen);
}

function volverImagen() {
    imagen.removeEventListener('mousemove', moverImagen);
    imagen.src = 'gato.png';
}


function moverImagen(e) {
    imagen.style.top = e.clientY - (imagen.clientHeight / 2) + 'px';
    imagen.style.left = e.clientX - (imagen.clientWidth / 2) + 'px';
}


document.cookie = 'valor1=1; path = /; expires='+ new Date(Date.now() + 50000) + ';samesite= lax';
document.cookie = 'valor2=2; samesite = lax';
document.cookie = 'valor3=hola; samesite = lax';

/**
 * Devulve el valor de una cookie cuyo nombre 
 * se pasa por parámetro
 * @param {string} nombre 
 * @returns {string}
 */
function getValueCookie(nombre) {
    const regex = new RegExp(`${nombre}=.*;?`, 'ig');
    let match = document.cookie.split(';').find((ele) => ele.match(regex));
    let valor = decodeURIComponent(match).split('=');
    return valor[1];
}

/**
 * Crea una nueva cookie o la modifica si ya existe
 * Por defecto el parámetro path es / 
 * Los días se convierten a segundos y se suman a la fecha de hoy
 * 
 *@param {integer} expires deberá introducirse en días
 *@return {void}
 *    */

function setCookie(nombre, valor, expires, path = '/') {
    let cuki = encodeURIComponent(nombre) + '=' + encodeURIComponent(valor) + '; path =' + path;
    let fecha = new Date(Date.now() + (expires * 24 * 60 * 60));
    document.cookie = cuki + ';expires=' + fecha.toUTCString() + '; samesite = lax';
}

setCookie('valor6', 'soy una nueva cuki', 30);

function borrarCuki(nombre) {
    setCookie(nombre, '', -10);

}