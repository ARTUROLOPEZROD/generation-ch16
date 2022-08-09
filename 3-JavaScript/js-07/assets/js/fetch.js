
const url = 'https://dog.ceo/api/breeds/image/random'


//respuesta de la peticion
fetch(url).then((respuesta) => {
    //console.log(respuesta);
})


  /// FORMA #1
//obtener la informacuon de la peticion
fetch(url)
.then((respuesta) => respuesta.json())  // regresa los datos convertidos en JASON
.then((datos) => {

    console.log(datos);

}).catch((error) => {          // .catch  se ejecuta si hay algun error
    console.log(error);
})



/// FORMA #2

 async function obtenerPerritoAleatorio() {        /// async - asincrona
  try{
    const respuesta = await fetch(url);          ///await -- esperar
    const datos = await respuesta.json()
  
    console.log(datos);
    
  }catch(error){

      console.log(error);
  }
}
obtenerPerritoAleatorio()

