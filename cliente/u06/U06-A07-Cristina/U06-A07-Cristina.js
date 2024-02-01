const contenedor = document.getElementById('contenedor');
const dom = document.childNodes;
let espacios = 0;
const html = 'HEAD, BODY';

mostrarHijos(dom);

function mostrarHijos(nodos) {
    nodos.forEach(node => {
        console.log(node);
        if (html.includes(node.nodeName)) {
            espacios = 0;
        } else if (html.includes(node.parentNode.nodeName)) {
            espacios = 1;
        }
        if (node.id == 'contenedor') {
            return
        }

        if (node.nodeName == '#text') {
            if (!/^\n/.test(node.nodeValue)) {
                escribir('Text: ' + node.nodeValue, espacios)
            }
        } else {
            escribir(node.nodeName, espacios);
        }

        if (node.childNodes.length > 0) {
            espacios++;
            mostrarHijos(node.childNodes);
        }
    });
}

function escribir(valor, espacios) {
    let p = document.createElement('p');
    p.textContent = `${'- '.repeat(espacios)} ${valor}`;
    contenedor.appendChild(p);
}

