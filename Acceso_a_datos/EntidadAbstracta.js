import  ClienteAbstracto from './ClienteAbstracto.js';
class EntidadAbstracta extends ClienteAbstracto {
  constructor() {
    super();
    this._url += 'marca/';
  }

  BuscarTodas() {
    return fetch(this._url);
  }

  BuscarPorNombre(nombre) {
    return fetch(this._url + 'nombre/' + nombre);
  }

  BuscarPorId(id) {
    return fetch(this._url + id);
  }
}
export default ClienteAbstracto;
