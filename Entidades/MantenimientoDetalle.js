class  MantenimientoDetalle {
  constructor(idMantenimientoDetalle, idEquipoDetalle, idOrdenTrabajo) {
    this._idMantenimientoDetalle = idMantenimientoDetalle;
    this._idEquipoDetalle  = idEquipoDetalle;
    this._idOrdenTrabajo  = idOrdenTrabajo;
  }

  get idMantenimientoDetalle() {
    return this._idMantenimientoDetalle;
  }

  get idEquipoDetalle() {
    return this._idEquipoDetalle;
  }

  get idOrdenTrabajo() {
    return this._idOrdenTrabajo;
  }

  set idMantenimientoDetalle(newIdMantenimientoDetalle) {
    this._idMantenimientoDetalle = newIdMantenimientoDetalle;
  }

  set idEquipoDetalle(newidEquipoDetalle) {
    this._idEquipoDetalle = newidEquipoDetalle;
  }

  set idOrdenTrabajo(newidOrdenTrabajo) {
    this._idOrdenTrabajo = newidOrdenTrabajo;
  }

}
export default MantenimientoDetalle;
