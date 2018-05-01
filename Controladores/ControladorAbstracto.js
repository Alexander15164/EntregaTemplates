import EntidadAbstracta from '../Acceso_a_datos/EntidadAbstracta.js';
class ControladorAbstracto {
  constructor() {
    this.entidadAbs = new EntidadAbstracta();
  }

  TodosLosDatos(entidad) {
    return this.entidadAbs.Buscar(entidad).then(
      function (response) {
        if (response.ok) {
          return response.json();
        }else {
          return null;
        }
      }
    );
  }
}

export  default ControladorAbstracto;
