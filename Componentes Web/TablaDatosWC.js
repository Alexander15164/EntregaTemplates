import ControladorAbstracto from '../Controladores/ControladorAbstracto.js';
class TablaDatosWC extends HTMLElement{
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });
  }

  connectedCallback() {
    let Eabs = new ControladorAbstracto();
    var tabla = document.createElement('TABLE');
    tabla.setAttribute('id', 'tabla_entidad');
    tabla.setAttribute('border', 1);
    Eabs.TodosLosDatos().then(
          function (data) {
            var tr0 = document.createElement('TR');
            //console.log('Datos Json de marca: ' + data);
            var numero = Object.keys(data[0]).length;
            var contenido = Object.keys(data[0]);
            //console.log(contenido);
            var tr = document.createElement('tr');
            for (var j = 0; j < numero; j++) {
              var td = document.createElement('td');
              td.innerHTML = contenido[j].toUpperCase();
              //console.log('CABECERA:' + contenido[j].toUpperCase());
              tr.appendChild(td);
            }

            tr.setAttribute('id', 'cabeceras');
            tabla.appendChild(tr);

            for (var i = 0; i < data.length; i++) {
              var numero = Object.keys(data[i]).length;
              var contenido = Object.keys(data[i]);
              console.log(contenido);
              //console.log(contenido[1]);
              var tr = document.createElement('tr');
              for (var j = 0; j < numero; j++) {
                let json = contenido[j];
                //console.log('dato a obtener:' + json);
                //console.log(data[i].nombre);

                var td = document.createElement('td');
                td.innerHTML = data[i][json];

                tr.appendChild(td);

              }
                //console.log('final lineaqaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');

              tr.setAttribute('id', 'cabeceras');
              tabla.appendChild(tr);
              // let tr = document.createElement('tr');
              // let td1 = document.createElement('td');
              // let td2 = document.createElement('td');
              // let td3 = document.createElement('td');
              // var td4 = document.createElement('td');
              // td1.innerText = data[i].idMarca;
              // tr.setAttribute('id', data[i].idMarca);
              // td2.innerText = data[i].nombre;
              // td3.innerText = data[i].activo;
              // td4.innerText = data[i].descripcion;
              // tr.appendChild(td1);
              // tr.appendChild(td2);
              // tr.appendChild(td3);
              // tr.appendChild(td4);
              //
              // tabla.appendChild(tr);

            }

            data.forEach(function (element) {

            });
          })
          .catch(function (error) {
            console.log('Ah Ocurrido un problema al ejecutar el metodo fetch: ' + error.message);
          }
        );
    this.root.appendChild(tabla);
  }

}
customElements.define('tabla-marca', TablaDatosWC);

// El primer parametro es el nombre del Web ComponentesWeb
// El segundo parametro es el nombre de la clase donde se define
