class  Diagnostico {
  constructor(idDiagnostico, nombre, descripcion) {
    this._idDiagnostico = idDiagnostico;
    this._nombre  = nombre;

    this._descripcion = descripcion;
  }

  get idDiagnostico() {
    return this._idDiagnostico;
  }

  get nombre() {
    return this._nombre;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idDiagnostico(newIdDiagnostico) {
    this._idDiagnostico = newIdDiagnostico;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default Diagnostico;
