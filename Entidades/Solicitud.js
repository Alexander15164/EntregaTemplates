class Solicitud {
  constructor(idSolicitud, solicitante, fechaSolicitud, activo) {
    this._idSolicitud = idSolicitud;
    this._solicitante = solicitante;
    this._fechaSolicitud = fechaSolicitud;
    this._activo = activo;
  }

  get idSolicitud() {
    return this._idSolicitud;
  }

  get solicitante() {
    return this._solicitante;
  }

  get fechaSolicitud() {
    return this._fechaSolicitud;
  }

  get activo() {
    return this._activo;
  }

  set idSolicitud(newIdSolicitud) {
    this._idSolicitud = newIdSolicitud;
  }

  set solicitante(newSolicitante) {
    this._solicitante = newSolicitante;
  }

  set fechaSolicitud(newFechaSolicitud) {
    this._fechaSolicitud =  newFechaSolicitud;
  }

  set activo(newActivo) {
    this._activo = newActivo;
  }
}
