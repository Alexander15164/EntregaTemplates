class  EquipoDetalle {
  constructor(idEquipoDetalle, idParte, idModelo, idEquipo, idMarca) {
    this._idEquipoDetalle = idEquipoDetalle;
    this._idParte  = idParte;
    this._idModelo  = idModelo;
    this._idEquipo = idEquipo;
    this._idSubTipoMantemiento = idMarca;
  }

  get idEquipoDetalle() {
    return this._idEquipoDetalle;
  }

  get idParte() {
    return this._idParte;
  }

  get idModelo() {
    return this._idModelo;
  }

  get idEquipo() {
    return this._idEquipo;
  }

  get idMarca() {
    return this._idMarca;
  }

  set idEquipoDetalle(newIdEquipoDetalle) {
    this._idEquipoDetalle = newIdEquipoDetalle;
  }

  set idParte(newidParte) {
    this._idParte = newidParte;
  }

  set idModelo(newidModelo) {
    this._idModelo = newidModelo;
  }

  set idEquipo(newidEquipo) {
    this._idEquipo = newidEquipo;
  }

  set idMarca(newIdMarca) {
    this._idMarca = newIdMarca;
  }

}
export default EquipoDetalle;
