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
          return undefined;
        }
      }
    );
  }

  DatosPorNombre(nombre) {
    return this.entidadAbs.BuscarPorNombre(nombre).then(
      function (response) {
        if (response.ok) {
          return response.json();
        }else {
          return undefined;
        }
      }
    );
  }

  DatosPorID(id) {
    return this.entidadAbs.BuscarPorId(id).then(
    function (response) {
      if (response.ok) {
        return response.json();
      }else {
        return undefined;
      }
    }
    );
  }

}
export  default ControladorAbstracto;
