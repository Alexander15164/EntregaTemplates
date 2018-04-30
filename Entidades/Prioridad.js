class  Prioridad {
  constructor(idPrioridad, nombre, activo, descripcion) {
    this._idPrioridad = idPrioridad;
    this._nombre  = nombre;
    this._activo  = activo;
    this._descripcion = descripcion;
  }

  get idPrioridad() {
    return this._idPrioridad;
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

  set idPrioridad(newIdPrioridad) {
    this._idPrioridad = newIdPrioridad;
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
export default Prioridad;
