class  TipoParte {
  constructor(idTipoParte, nombre,  descripcion) {
    this._idTipoParte = idTipoParte;
    this._nombre  = nombre;
    this._descripcion = descripcion;
  }

  get idTipoParte() {
    return this._idTipoParte;
  }

  get nombre() {
    return this._nombre;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idTipoParte(newIdTipoParte) {
    this._idTipoParte = newIdTipoParte;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default TipoParte;
