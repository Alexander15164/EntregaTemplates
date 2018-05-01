import  ClienteAbstracto from './ClienteAbstracto.js';
class EntidadAbstracta extends ClienteAbstracto {
  constructor() {
    super();

  }

  cambiarUrl(entidad) {
    this._url += entidad;
  }

  Buscar(entidad) {
    return fetch(this._url + entidad);
  }

}
export default EntidadAbstracta;
