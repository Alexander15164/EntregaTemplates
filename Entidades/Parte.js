class  Parte {
  constructor(idParte, nombre, idTipoParte, descripcion) {
    this._idParte = idParte;
    this._nombre  = nombre;
    this._idTipoParte  = idTipoParte;
    this._descripcion = descripcion;
  }

  get idParte() {
    return this._idParte;
  }

  get nombre() {
    return this._nombre;
  }

  get idTipoParte() {
    return this._idTipoParte;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idParte(newIdParte) {
    this._idParte = newIdParte;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set idTipoParte(newidTipoParte) {
    this._idTipoParte = newidTipoParte;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default Parte;
