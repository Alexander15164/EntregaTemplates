import EntidadAbstracta from '../Acceso_a_datos/EntidadAbstracta.js';
class ControladorAbstracto {
  constructor() {
    this.entidadAbs = new EntidadAbstracta();
  }

  TodosLosDatos() {
    return fetch('http://localhost:8080/MantenimientoWebData-1.0-SNAPSHOT/webresources/marca').then(
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

  BuscarPorRango(first, pagesize) {
    return this.entidadAbs.buscarRango(first, pagesize).then(
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
