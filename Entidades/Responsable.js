class  Responsable {
  constructor(idMarca, nombre, activo, descripcion, idTipoResponsable) {
    this._idResponsable = idResponsable;
    this._nombre  = nombre;
    this._activo  = activo;
    this._descripcion = descripcion;
    this._idSubTipoMantemiento = idTipoResponsable;
  }

  get idResponsable() {
    return this._idResponsable;
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

  get idTipoResponsable() {
    return this._idTipoResponsable;
  }

  set idResponsable(newIdResponsable) {
    this._idMarca = newIdResponsable;
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

  set idTipoResponsable(newIdTipoResponsable) {
    this._idTipoResponsable = newIdTipoResponsable;
  }

}
export default Responsable;
