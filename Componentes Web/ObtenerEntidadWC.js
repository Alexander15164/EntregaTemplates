import EntidadAbstracta from '../Acceso_a_datos/EntidadAbstracta.js';
class ObtenerEntidadWC extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    let EntidadAbs = new EntidadAbstracta();
    let form = document.createElement('form');
    let texto = document.createElement('h3');
    let entidad = document.createElement('input');
    let boton = document.createElement('input');
    texto.appendChild(document.createTextNode('Ingrese una Entidad'));
    entidad.setAttribute('id', 'entidad');
    form.setAttribute('id', 'formulario');
    entidad.setAttribute('type', 'text');
    boton.setAttribute('type', 'submit');
    boton.setAttribute('value', 'Cargar entidad');
    boton.onclick = function () {
      alert('obtener valor del input');
    };

    form.appendChild(texto);
    form.appendChild(entidad);
    form.appendChild(boton);
    this.root.appendChild(form);
  }

}
customElements.define('buscar-entidad', ObtenerEntidadWC);
