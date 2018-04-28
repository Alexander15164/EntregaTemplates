
class ObtenerEntidadWC extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });

  }

  connectedCallback() {

    let texto = document.createElement('h3');
    let entidad = document.createElement('input');
    let boton = document.createElement('boton');
    texto.appendChild(document.createTextNode('Ingrese una Entidad'));
    entidad.setAttribute('id', 'entidad');
    entidad.setAttribute('type', 'text');
    boton.setAttribute('value', 'Cargar entidad');

    // dato.onkeyup = function() {
    // let  text =this.value;
    // console.log(text);
    //   if(text!=" "){
    //     datalist.innerHTML="";
    //     controladorMarca.MarcasPorNombre(text).then(
    //       function(data) {
    //         console.log("Datos Json de marca: "+ data);

    //         data.forEach(function(element) {
    //         let option = document.createElement("OPTION");
    //         option.id = element.idMarca;
    //         option.value = element.nombre;
    //         datalist.appendChild(option);
    //         });
    //       })
    //       .catch(function(error) {
    //       console.log('Ah Ocurrido un problema al ejecutar el metodo fetch: ' + error.message);
    //     });
    //   }

    // };
    // let enter = function (e) {
    //   var key = e.which || e.keyCode;
    //   if (key === 13) { // 13 is enter
    //     if (datalist.options.length==1) {
    //       let t = datalist.options[0].id;
    //       let event = new CustomEvent("marcadetails",{'composed':true,'bubbles':true,
    // 'detail':{'text':t}});
    //       this.dispatchEvent(event);
    //     }
    //   }
    // };
    // dato.addEventListener('keypress',enter);
    this.root.appendChild(texto);
    this.root.appendChild(entidad);
    this.root.appendChild(boton);

    // this.addEventListener("marcadetails", function(e) {
    //   //let li = document.createElement("LI");
    //   //li.innerText = e.detail.text;
    //   let fo = this.getAttribute("for");
    //   document.querySelector("#"+fo).setAttribute("buscarid",e.detail.text);
    // });
  }

}
customElements.define('buscar-entidad', ObtenerEntidadWC);

// El primer parametro es el nombre del Web ComponentesWeb
// El segundo parametro es el nombre de la clase donde se define
