class  Paso {
  constructor(idPaso, nombre, idProcedimiento, descripcion) {
    this._idPaso = idPaso;
    this._nombre  = nombre;
    this._idProcedimiento  = idProcedimiento;
    this._descripcion = descripcion;
  }

  get idPaso() {
    return this._idPaso;
  }

  get nombre() {
    return this._nombre;
  }

  get idProcedimiento() {
    return this._idProcedimiento;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idPaso(newIdPaso) {
    this._idPaso = newIdPaso;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set idProcedimiento(newidProcedimiento) {
    this._idProcedimiento = newidProcedimiento;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default Paso;
