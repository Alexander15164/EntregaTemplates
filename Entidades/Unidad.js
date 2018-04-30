class  Unidad {
  constructor(idUnidad, nombre, codigo) {
    this._idUnidad = idUnidad;
    this._nombre  = nombre;
    this._codigo  = codigo;
  }

  // get de la identidad
  get idUnidad() {
    return this._idUnidad;
  }

  get nombre() {
    return this._nombre;
  }

  get codigo() {
    return this._codigo;
  }

  // set de la identidad

  set idUnidad(newIdUnidad) {
    this._idUnidad = newIdUnidad;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set codigo(newCodigo) {
    this._codigo = newCodigo;
  }

}
export default Unidad;
