class CalendarioExcepcion {
  constructor(idExcepcion, fecha, estado, descripcion) {
    this._idExcepcion = idExcepcion;
    this._fecha = fecha;
    this._estado = estado;
    this._descripcion = descripcion;
  }

  get idExcepcion() {
    return this._idExcepcion;
  }

  get fecha() {
    return this._fecha;
  }

  get estado() {
    return this.estado;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idExcepcion(newIdExcepcion) {
    this._idExcepcion = newIdExcepcion;
  }

  set fecha(newFecha) {
    this._fecha = newFecha;
  }

  set estado(newEstado) {
    this._estado = newEstado;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }
}
export  default CalendarioExcepcion;
