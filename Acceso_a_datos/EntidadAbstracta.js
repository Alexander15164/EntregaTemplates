import  ClienteAbstracto from './ClienteAbstracto.js';
class EntidadAbstracta extends ClienteAbstracto {
  constructor() {
    super();

    //this._url += 'marca';
  }

  cambiarUrl(entidad) {
    this._url += entidad;
  }

  Buscar(entidad) {
    console.log('entidad abstractaaa ' + entidad);
    return fetch(this._url + entidad);
  }

  BuscarPorNombre(nombre) {
    return fetch(this._url + 'nombre/' + nombre);
  }

  BuscarPorId(id) {
    return fetch(this._url + id);
  }
}
export default EntidadAbstracta;
