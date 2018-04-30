class  Modelo {
  constructor(idModelo, nombre, activo, descripcion) {
    this._idModelo = idModelo;
    this._nombre  = nombre;
    this._activo  = activo;
    this._descripcion = descripcion;
  }

  get idModelo() {
    return this._idModelo;
  }

  get nombre() {
    return this._nombre;
  }

  get activo() {
    return this._activo;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idModelo(newIdModelo) {
    this._idModelo = newIdModelo;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set activo(newActivo) {
    this._activo = newActivo;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default Modelo;
