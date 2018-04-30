class  TipoResponsable {
  constructor(idTipoResponsable, nombre, descripcion) {
    this._idTipoResponsable = idTipoResponsable;
    this._nombre  = nombre;
    this._descripcion = descripcion;
  }

  get idTipoResponsable() {
    return this._idTipoResponsable;
  }

  get nombre() {
    return this._nombre;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idTipoResponsable(newIdTipoResponsable) {
    this._idTipoResponsable = newIdTipoResponsable;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default TipoResponsable;
