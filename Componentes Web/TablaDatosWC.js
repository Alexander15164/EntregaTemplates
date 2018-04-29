import EntidadAbstracta from '../Acceso_a_datos/EntidadAbstracta';
class TablaDatosWC extends HTMLElement{
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
  }

  get seleccionado() {
    return this.getAttribute('selection');
  }

  set seleccionado(valor) {
    this.setAttribute('selection', valor);
  }
}
