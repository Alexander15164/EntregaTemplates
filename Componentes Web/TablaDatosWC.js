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

    var divEleccion = document.createElement('div');
    var select = document.createElement('select');
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
    opcion0.setAttribute('value', 'seleccion');
    opcion0.innerText = 'Seleccione una entidad';
    select.appendChild(opcion0);
    opcion1.setAttribute('value', 'marca');
    opcion1.innerText = ' Marca';
    select.appendChild(opcion1);
    opcion2.setAttribute('value', 'modelo');
    opcion2.innerText = ' Modelo';
    select.appendChild(opcion2);
    opcion3.setAttribute('value', 'unidad');
    opcion3.innerText = ' unidad';
    select.appendChild(opcion3);
    divEleccion.appendChild(select);

    divEleccion.setAttribute('id', 'seleccion');
    div.setAttribute('id', 'paginador');
    tabla.setAttribute('id', 'tablaEntidad');
    tabla.setAttribute('border', 1);
    tabla.style.color = 'grey';
    tabla.style.fontFamily = 'fantasy, Helvetica, sans-serif';
    select.onchange = function () {
      var selectedOption = this.options[select.selectedIndex];
      while (tabla.firstChild) {
        tabla.removeChild(tabla.firstChild);
      }

      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }

      var nombre1 = selectedOption.value;
      console.log(nombre1);
      Eabs.TodosLosDatos(nombre1).then(
            function (data) {
              while (tabla.firstChild) {
                tabla.removeChild(tabla.firstChild);
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
                  for (var j = 0; j < numero; j++) {
                    var td = document.createElement('td');
                    td.innerHTML = contenido[j].toUpperCase();
                    td.style.font ="italic bold 20px Verdana,serif";
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
                      for (var j = 0; j < numero; j++) {
                        let json = contenido[j];

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
              for (var j = 0; j < numero; j++) {
                var td = document.createElement('td');
                td.innerHTML = contenido[j].toUpperCase();
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
                  for (var j = 0; j < numero; j++) {
                    let json = contenido[j];

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


            })
            .catch(function (error) {
              console.log('Ah Ocurrido un problema al ejecutar el metodo fetch: ' + error.message);
            }
          );

    };

    this.root.appendChild(divEleccion);
    this.root.appendChild(tabla);
    this.root.appendChild(div);
  }

}
customElements.define('tabla-marca', TablaDatosWC);

// El primer parametro es el nombre del Web ComponentesWeb
// El segundo parametro es el nombre de la clase donde se define
