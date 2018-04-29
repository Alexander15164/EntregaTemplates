let template = document.querySelector('#manTemplate');
let clone = template.content.cloneNode(true);
let  nombre  = clone.querySelector('nombre-tabla');
nombre.setAttribute('leyenda', 'Marca');
template.parentNode.appendChild(clone);
