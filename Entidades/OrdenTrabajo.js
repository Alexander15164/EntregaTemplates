class  OrdenTrabajo {
  constructor(idOrdenTrabajo, fechaInicio, observaciones, fechaEstimada,
    idSolicitud, idTipoMantenimiento, idUnidad, idPrioriodid, idEquipo) {

    this._idOrdenTrabajo = idOrdenTrabajo;
    this._fechaInicio  = fechaInicio;
    this._observaciones  = observaciones;
    this._fechaEstimada = fechaEstimada;
    this._idSolicitud = idSolicitud;
    this._idSubTipoMantenimiento = idTipoMantenimiento;
    this._idUnidad = idUnidad;
    this._idPrioridad = idPrioriodid;
    this._idEquipo = idEquipo;
  }

  get idOrdenTrabajo() {
    return this._idOrdenTrabajo;
  }

  get fechaInicio() {
    return this._fechaInicio;
  }

  get observaciones() {
    return this._observaciones;
  }

  get fechaEstimada() {
    return this._fechaEstimada;
  }

  get idSolicitud() {
    return this._idSolicitud;
  }

  get idTipoMantenimiento() {
    return this._idTipoMantenimiento;
  }

  get idUnidad() {
    return this._idUnidad;
  }

  get idPrioriodid() {
    return this._idPrioriodid;
  }

  get idEquipo() {
    return this._idEquipo;
  }

  set idOrdenTrabajo(newIdOrdenTrabajo) {
    this._idOrdenTrabajo = newIdOrdenTrabajo;
  }

  set fechaInicio(newfechaInicio) {
    this._fechaInicio = newfechaInicio;
  }

  set observaciones(newobservaciones) {
    this._observaciones = newobservaciones;
  }

  set fechaEstimada(newfechaEstimada) {
    this._fechaEstimada = newfechaEstimada;
  }

  set idSolicitud(newidSolicitud) {
    this._idSolicitud = newidSolicitud;
  }

  set fechaInicio(newfechaInicio) {
    this._fechaInicio = newfechaInicio;
  }

}
export default OrdenTrabajo;
