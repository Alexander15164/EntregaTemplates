import EntidadAbstracta from '../Acceso_a_datos/EntidadAbstracta.js';
class NombreEntidadWC extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
  }

  get leyenda() {
    return this.getAttribute('leyenda');
  }

  set leyenda(valor) {
    this.setAttribute('leyenda', valor);
  }

  connectedCallback() {
    let titulo = document.createElement('h1');
    let leyenda = this.getAttribute('leyenda');
    let entidad = 'Marca';
    this.setAttribute('leyenda', leyenda);
    titulo.innerText = leyenda;
    this.root.appendChild(titulo);
  }

}
customElements.define('nombre-tabla', NombreEntidadWC);
