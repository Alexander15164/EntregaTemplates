class  EstadoMantenimientoDetalle {
  constructor(idEstadoMantenimientoDetalle,
    idMantenimientoDetalle, idEstado, idResponsable, idPaso) {
    this._idEstadoMantenimientoDetalle = idEstadoMantenimientoDetalle;
    this._idMantenimientoDetalle  = idMantenimientoDetalle;
    this._idEstado  = idEstado;
    this._idResponsable = idResponsable;
    this._idSubTipoMantemiento = idPaso;
  }

  get idEstadoMantenimientoDetalle() {
    return this._idEstadoMantenimientoDetalle;
  }

  get idMantenimientoDetalle() {
    return this._idMantenimientoDetalle;
  }

  get idEstado() {
    return this._idEstado;
  }

  get idResponsable() {
    return this._idResponsable;
  }

  get idPaso() {
    return this._idPaso;
  }

  set idEstadoMantenimientoDetalle(newIdEstadoMantenimientoDetalle) {
    this._idEstadoMantenimientoDetalle = newIdEstadoMantenimientoDetalle;
  }

  set idMantenimientoDetalle(newidMantenimientoDetalle) {
    this._idMantenimientoDetalle = newidMantenimientoDetalle;
  }

  set idEstado(newidEstado) {
    this._idEstado = newidEstado;
  }

  set idResponsable(newidResponsable) {
    this._idResponsable = newidResponsable;
  }

  set idPaso(newIdPaso) {
    this._idPaso = newIdPaso;
  }

}
export default EstadoMantenimientoDetalle;
