class  Estado {
  constructor(idEstado, nombre, activo, descripcion) {
    this._idMarca = idEstado;
    this._nombre  = nombre;
    this._activo  = activo;
    this._descripcion = descripcion;
  }

  get idEstado() {
    return this._idEstado;
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

  set idEstado(newIdEstado) {
    this._idMarca = newIdEstado;
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
export default Estado;
