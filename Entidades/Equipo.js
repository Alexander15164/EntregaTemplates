class  Equipo {
  constructor(idEquipo, correlativo,  observaciones) {
    this._idEquipo = idEquipo;
    this._correlativo  = correlativo;
    this._observaciones = observaciones;
  }

  get idEquipo() {
    return this._idEquipo;
  }

  get correlativo() {
    return this._correlativo;
  }

  get observaciones() {
    return this._observaciones;
  }

  set idEquipo(newIdEquipo) {
    this._idEquipo = newIdEquipo;
  }

  set correlativo(newcorrelativo) {
    this._correlativo = newcorrelativo;
  }

  set observaciones(newobservaciones) {
    this._observaciones = newobservaciones;
  }

}
export default Equipo;
