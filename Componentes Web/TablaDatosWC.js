import ControladorAbstracto from '../Controladores/ControladorAbstracto.js';
class TablaDatosWC extends HTMLElement{
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    let Eabs = new ControladorAbstracto();
    var tabla = document.createElement('TABLE');
    var div = document.createElement('div');
    var cabecerasDisponibles = document.createElement('form');
    cabecerasDisponibles.style.width = '90%';
    var divEleccion = document.createElement('div');
    var select = document.createElement('select');
    select.setAttribute('class', 'caja');
    var opcion0 = document.createElement('option');
    var opcion1 = document.createElement('option');
    var opcion2 = document.createElement('option');
    var opcion3 = document.createElement('option');
    var opcion4 = document.createElement('option');
    var opcion5 = document.createElement('option');
    var opcion6 = document.createElement('option');
    var opcion7 = document.createElement('option');
    var opcion8 = document.createElement('option');
    var opcion9 = document.createElement('option');
    var opcion10 = document.createElement('option');
    var opcion11 = document.createElement('option');
    var opcion12 = document.createElement('option');
    var opcion13 = document.createElement('option');
    var opcion14 = document.createElement('option');
    var opcion15 = document.createElement('option');
    var opcion16 = document.createElement('option');
    var opcion17 = document.createElement('option');
    var opcion18 = document.createElement('option');
    var opcion19 = document.createElement('option');
    var opcion20 = document.createElement('option');
    var opcion21 = document.createElement('option');
    var opcion22 = document.createElement('option');
    var opcion23 = document.createElement('option');
    opcion0.setAttribute('value', 'seleccion');
    opcion0.innerText = 'Seleccione una entidad';
    select.appendChild(opcion0);
    opcion1.setAttribute('value', 'marca');
    opcion1.innerText = 'Marca';
    select.appendChild(opcion1);
    opcion2.setAttribute('value', 'modelo');
    opcion2.innerText = 'Modelo';
    select.appendChild(opcion2);
    opcion3.setAttribute('value', 'unidad');
    opcion3.innerText = 'Unidad';
    select.appendChild(opcion3);
    opcion4.setAttribute('value', 'solicitud');
    opcion4.innerText = 'Solicitud';
    select.appendChild(opcion4);
    opcion5.setAttribute('value', 'subTipoMantenimiento');
    opcion5.innerText = 'Sub Tipo Mantenimiento';
    select.appendChild(opcion5);
    opcion6.setAttribute('value', 'tipoMantenimiento');
    opcion6.innerText = ' Tipo Mantenimiento';
    select.appendChild(opcion6);
    opcion7.setAttribute('value', 'prioridad');
    opcion7.innerText = ' Prioridad';
    select.appendChild(opcion7);
    opcion8.setAttribute('value', 'equipo');
    opcion8.innerText = 'Equipo';
    select.appendChild(opcion8);
    opcion9.setAttribute('value', 'paso');
    opcion9.innerText = 'Paso';
    select.appendChild(opcion9);
    opcion10.setAttribute('value', 'procedimiento');
    opcion10.innerText = 'Procedimiento';
    select.appendChild(opcion10);
    opcion11.setAttribute('value', 'diagnostico');
    opcion11.innerText = 'Diagnostico';
    select.appendChild(opcion11);
    divEleccion.appendChild(select);
    opcion12.setAttribute('value', 'diagnosticoParte');
    opcion12.innerText = 'Diagnostico Parte';
    select.appendChild(opcion12);
    opcion13.setAttribute('value', 'parte');
    opcion13.innerText = 'Parte';
    select.appendChild(opcion13);
    opcion14.setAttribute('value', 'tipoParte');
    opcion14.innerText = 'Tipo Parte';
    select.appendChild(opcion14);
    opcion15.setAttribute('value', 'tipoResponsable');
    opcion15.innerText = 'Tipo Responsable';
    select.appendChild(opcion15);
    opcion16.setAttribute('value', 'responsable');
    opcion16.innerText = ' Responsable';
    select.appendChild(opcion16);
    opcion17.setAttribute('value', 'estado');
    opcion17.innerText = 'Estado';
    select.appendChild(opcion17);
    opcion18.setAttribute('value', 'estadoMantenimientoDetalle');
    opcion18.innerText = 'Estado Mantenimiento Detalle';
    select.appendChild(opcion18);
    opcion19.setAttribute('value', 'mantenimientoDetalle');
    opcion19.innerText = 'Mantenimiento Detalle';
    select.appendChild(opcion19);
    opcion20.setAttribute('value', 'calendarioExcepcion');
    opcion20.innerText = 'Calendario Excepcion';
    select.appendChild(opcion20);
    opcion21.setAttribute('value', 'ordenTrabajoCalendario');
    opcion21.innerText = ' Orden Trabajo Calendario';
    select.appendChild(opcion21);
    opcion22.setAttribute('value', 'ordenTrabajo');
    opcion22.innerText = 'Orden Trabajo';
    select.appendChild(opcion22);
    opcion23.setAttribute('value', 'equipoDetalle');
    opcion23.innerText = 'Equipo Detalle';
    select.appendChild(opcion23);
    divEleccion.setAttribute('id', 'seleccion');
    div.setAttribute('id', 'paginador');
    tabla.setAttribute('id', 'tablaEntidad');
    tabla.setAttribute('border', 1);
    tabla.style.color = 'black';
    tabla.style.fontFamily = 'fantasy, Helvetica, sans-serif';
    tabla.style.width = '90%';
    select.onchange = function () {
      var selectedOption = this.options[select.selectedIndex];
      cabecerasDisponibles.style.background = '#D5E1F3';
      var nombre1 = selectedOption.value;
      var h2 = document.createElement('h2');

      Eabs.TodosLosDatos(nombre1).then(
            function (data) {
              while (tabla.firstChild) {
                tabla.removeChild(tabla.firstChild);
              }

              while (div.firstChild) {
                div.removeChild(div.firstChild);
              }

              while (cabecerasDisponibles.firstChild) {
                cabecerasDisponibles.removeChild(cabecerasDisponibles.firstChild);
              }

              h2.innerText = 'Cabeceras Disponibles';
              cabecerasDisponibles.appendChild(h2);

              let cabeceras = Object.keys(data[0]);
              for (let a = 0; a < cabeceras.length; a++) {
                let check =  document.createElement('input');
                let label =  document.createElement('label');
                label.innerText = ' ' + cabeceras[a];
                check.setAttribute('type', 'checkbox');
                check.setAttribute('value', cabeceras[a]);
                check.setAttribute('name', 'checkbox');
                label.appendChild(check);
                cabecerasDisponibles.appendChild(label);
              }

              cabecerasDisponibles.innerHTML += '<br><br>';
              var cargar = document.createElement('input');
              cargar.setAttribute('type', 'button');
              cargar.setAttribute('value', 'Desplegar');
              cabecerasDisponibles.appendChild(cargar);
              cargar.onclick = function () {
                var contenidoMod = ['idMarca', 'nombre', 'activo', 'descripcion'];
                var checkboxs = cabecerasDisponibles.checkbox;
                var x = 0;
                var Cabeceras = new Array();
                for (var i = 0; i < checkboxs.length; i++) {
                  if (checkboxs[i].checked) {
                    Cabeceras.push(checkboxs[i].value);
                    x += 1;
                  }
                }

                while (tabla.firstChild) {
                  tabla.removeChild(tabla.firstChild);
                }

                while (div.firstChild) {
                  div.removeChild(div.firstChild);
                }

                let tamaño = (data.length);
                var pagina = Math.ceil(tamaño / 4);
                for (var i = 0; i < pagina; i++) {

                  let boton = document.createElement('input');
                  boton.setAttribute('first', (i * 4));
                  boton.setAttribute('type', 'button');
                  boton.setAttribute('value', i + 1);
                  boton.onclick = function () {

                    while (tabla.firstChild) {
                      tabla.removeChild(tabla.firstChild);
                    }

                    //agregando cabeceras
                    var tr0 = document.createElement('TR');
                    var numero = Object.keys(data[0]).length;
                    var contenido = Object.keys(data[0]);

                    var tr = document.createElement('tr');
                    for (var j = 0; j < Cabeceras.length; j++) {
                      var td = document.createElement('td');
                      td.innerHTML = Cabeceras[j].toUpperCase();
                      td.style.font = 'italic bold 20px Verdana,serif';
                      tr.appendChild(td);
                    }

                    tr.setAttribute('id', 'cabeceras');
                    tabla.appendChild(tr);

                    let  id = this.getAttribute('first');
                    var final = parseInt(id) + 4;

                    //agregando registros
                    for (var i = id; i < final; i++) {

                      if (data[i] != null) {

                        var numero = Object.keys(data[i]).length;
                        var contenido = Object.keys(data[i]);

                        var tr = document.createElement('tr');
                        for (var j = 0; j < Cabeceras.length; j++) {
                          let json = Cabeceras[j];

                          var td = document.createElement('td');
                          td.innerHTML = data[i][json];

                          tr.appendChild(td);

                        }

                        tabla.appendChild(tr);
                      }else {
                        break;
                      }

                    }

                  };

                  div.appendChild(boton);
                }

                //agregando cabeceras
                var tr0 = document.createElement('TR');
                var numero = Object.keys(data[0]).length;
                var contenido = Object.keys(data[0]);
                var tr = document.createElement('tr');
                for (var j = 0; j < Cabeceras.length; j++) {
                  var td = document.createElement('td');
                  td.innerHTML = Cabeceras[j].toUpperCase();
                  tr.appendChild(td);
                }

                tr.setAttribute('id', 'cabeceras');
                tabla.appendChild(tr);

                //agregando registros
                for (var i = 0; i < 4; i++) {

                  if (data[i] != null) {

                    var numero = Object.keys(data[i]).length;
                    var contenido = Object.keys(data[i]);

                    var tr = document.createElement('tr');
                    for (var j = 0; j < Cabeceras.length; j++) {
                      let json = Cabeceras[j];

                      var td = document.createElement('td');
                      td.innerHTML = data[i][json];

                      tr.appendChild(td);

                    }

                    tr.setAttribute('id', data[i].idMarca);
                    tabla.appendChild(tr);
                  }else {
                    break;
                  }

                }

              };

            })
            .catch(function (error) {
              console.log('Ah Ocurrido un problema al ejecutar el metodo fetch: ' + error.message);
            }
          );

    };

    this.root.appendChild(divEleccion);
    this.root.appendChild(cabecerasDisponibles);
    this.root.appendChild(tabla);
    this.root.appendChild(div);
  }

}
customElements.define('tabla-datos', TablaDatosWC);

// El primer parametro es el nombre del Web ComponentesWeb
// El segundo parametro es el nombre de la clase donde se define
