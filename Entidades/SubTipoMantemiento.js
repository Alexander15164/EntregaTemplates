class SubTipoMantenimiento {
  constructor(idSubTipoMantenimiento, nombre, descripcion) {
    this._idSubTipoMantemiento = idSubTipoMantenimiento;
    this._nombre = nombre;
    this._descripcion = descripcion;
  }

  get idSubTipoMantenimiento() {
    return this._idSubTipoMantemiento;
  }

  get nombre() {
    return this._nombre;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idSubTipoMantenimiento(newidSubTipoMantenimiento) {
    this._idSubTipoMantemiento = newidSubTipoMantenimiento;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }
}
export default SubTipoMantenimiento;
