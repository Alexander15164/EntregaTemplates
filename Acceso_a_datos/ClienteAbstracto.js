class ClienteAbstracto {
  constructor() {
    this._url = 'http://localhost:8080/MantenimientoWebData-1.0-SNAPSHOT/webresources/';
  }

  get url() {
    return this._url;
  }
}

export default ClienteAbstracto;
