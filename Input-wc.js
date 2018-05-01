import ControladorAbstracto from  '../Controladores/ControladorAbstracto.js';
class Input_wc extends HTMLElement{
  constructor() {
    super();
    this.root = this.attachShadow({mode:'closed'});
  }
  connectedCallback(){
  var cm = new ControladorAbstracto();
  var div = document.createElement("DIV");
  var divBotton = document.createElement("DIV");
  let etiInfo = document.createElement("H2");
  etiInfo.appendChild(document.createTextNode("DETALLES:"));
  div.appendChild(etiInfo);
  this.btnEliminar =document.createElement("button");
  this.btnEliminar.appendChild(document.createTextNode("ELIMINAR"));
  this.btnActualziar =document.createElement("button");
  this.btnActualizar.appendChild(document.createTextNode("ACTUALIZAR"));
  this.btnnuevo =document.createElement("button");
  this.btnNuevo.appendChild(document.createTextNode("NUEVO"));
  this.btnNuevo.onclick = _=> this.validar();
  this.btnCancelar =document.createElement("button");
  this.btnCancelar.appendChild(document.createTextNode("CANCELAR")).disable =true;
  this.btnGuardar =document.createElement("button");
  this.btnGuardar.appendChild(document.createTextNode("GUARDAR")).disable = true;
  var id =1;
  cm.DatosPorID(id).then (
    function (data){
      var id = document.createElement("INPUT");
      var nombre = document.createElement("INPUT");
      var activo = document.createElement("INPUT");
      var descripcion = document.createElement("INPUT");

      id.value = data.idMarca;
      nombre.value = data.nombre;
      activo.value = data.activo;
      descripcion.value = data.descripcion;
      div.appendChild(id);
      div.appendChild(nombre);
      div.appendChild(activo);
      div.appendChild(descripcion);

    }).catch(function (error) {
      console.log('Ah Ocurrido un problema al ejecutar el metodo fetch: ' + error.message);
    }
  );

this.root.appendChild(div);

}


validacion (){

}

  }

customElements.define("input-wc", Input_wc);
