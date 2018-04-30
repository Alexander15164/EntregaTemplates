class  OrdenTrabajoCalendario {
  constructor(idFecha, idOrdenTrabajo, activo, descripcion) {
    this._idFecha = idFecha;
    this._idOrdenTrabajo  = idOrdenTrabajo;
  }

  get idFecha() {
    return this._idFecha;
  }

  get idOrdenTrabajo() {
    return this._idOrdenTrabajo;
  }

  set idFecha(newIdFecha) {
    this._idFecha = newIdFecha;
  }

  set idOrdenTrabajo(newidOrdenTrabajo) {
    this._idOrdenTrabajo = newidOrdenTrabajo;
  }

}
export default OrdenTrabajoCalendario;
