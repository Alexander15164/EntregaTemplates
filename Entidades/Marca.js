class  Marca {
  constructor(idMarca, nombre, activo, descripcion) {
    this._idMarca = idMarca;
    this._nombre  = nombre;
    this._activo  = activo;
    this._descripcion = descripcion;
  }

  get idMarca() {
    return this._idMarca;
  }

  get nombre() {
    return this._nombre;
  }

  get activo() {
    return this._activo;
  }

  get descripcion() {
    return this._descripcion;
  }

  set idMarca(newIdMarca) {
    this._idMarca = newIdMarca;
  }

  set nombre(newNombre) {
    this._nombre = newNombre;
  }

  set activo(newActivo) {
    this._activo = newActivo;
  }

  set descripcion(newDescripcion) {
    this._descripcion = newDescripcion;
  }

}
export default Marca;
