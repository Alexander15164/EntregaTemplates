class  Procedimiento {
  constructor(idProcedimiento, nombre, activo, descripcion, idDiagnostico) {
    this._idProcedimiento = idProcedimiento;
    this._nombre  = nombre;
    this._activo  = activo;
    this._descripcion = descripcion;
    this._idDiagnostico = idDiagnostico;
  }

  get idProcedimiento() {
    return this._idProcedimiento;
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

  get idDiagnostico() {
    return this._idDiagnostico;
  }

  set idProcedimiento(newIdProcedimiento) {
    this._idProcedimiento = newIdProcedimiento;
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

  set idDiagnostico(newIdDiagnostico) {
    this._idDiagnostico = newIdDiagnostico;
  }
}
export default Procedimiento;
