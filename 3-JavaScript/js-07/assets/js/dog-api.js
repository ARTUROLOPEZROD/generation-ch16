

//URLs para consumir//

const urlAleatorios = 'https://dog.ceo/api/breeds/image/random'

/* elementos del DOM */

  const imagenPerrito = document.getElementById('img-perrito');
 console.log(imagenPerrito); 

 const btn = document.getElementById('btn-perrito');
console.log(btn); 

 /* eventos */

 btn.addEventListener('click', () => {
console.log('boton presionado');

   //agregar la funcionalidad
   obtenerPerritoAleatorio(urlAleatorios)


 })


 /* Funciones */

async function obtenerPerritoAleatorio(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);           // devuelve los valores en general
    console.log(datos[0].id);  //accede directoa al valor
    console.log(datos.status);  // accedendirecto al valor

    imagenPerrito.src = datos.message

}

 // obtenerPerritoAleatorio(urlAleatorios) 
















