class  TipoMantenimiento {
  constructor(idTipoMantenimiento, nombre, activo, descripcion, idSubTipoMantenimiento) {
    this._idTipoMantenimiento = idTipoMantenimiento;
    this._nombre  = nombre;
    this._activo  = activo;
    this._descripcion = descripcion;
    this._idSubTipoMantenimiento = idSubTipoMantenimiento;
  }

  get idTipoMantenimiento() {
    return this._idTipoMantenimiento;
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

  get idSubTipoMantenimiento() {
    return this._idSubTipoMantenimiento;
  }

  set idTipoMantenimiento(newIdTipoMantenimiento) {
    this._idTipoMantenimiento = newIdTipoMantenimiento;
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

  set idSubTipoMantenimiento(newIdSubTipoMantenimiento) {
    this._idSubTipoMantenimiento = newIdSubTipoMantenimiento;
  }

}
export default TipoMantenimiento;
