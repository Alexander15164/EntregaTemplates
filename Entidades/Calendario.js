class  Calendario {
  constructor(idFecha, fecha, descripcion) {
    this._idFecha = idFecha;
    this._fecha = fecha;
    this._descripcion = descripcion;
  }

  get idFecha() {
    return this._idFecha;
  }

  get idFecha() {
    return this._idFecha;
  }

  get fecha() {
    return this._fecha;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idFecha(newIdFecha) {
    this._idFecha  = newIdFecha;
  }

  set fecha(newFecha) {
    this._fecha = newFecha;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default Calendario;
