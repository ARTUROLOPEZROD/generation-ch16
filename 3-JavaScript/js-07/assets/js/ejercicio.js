const urlAleatorios = 'https://api.thecatapi.com/v1/images/search'



const imagenGatito = document.getElementById('img-gatito');
 console.log(imagenGatito); 

 const btn = document.getElementById('btn-Gatitos');
console.log(btn); 

 /* eventos */

btn.addEventListener('click', () => {
console.log('boton presionado');

   //agregar la funcionalidad
   obtenerGatoAleatorio(urlAleatorios)
})


 /* Funciones */

async function obtenerGatoAleatorio(url){

    const respuesta = await fetch(url)
    const datos = await respuesta.json()

    console.log(datos);           // devuelve los valores en general
    console.log(datos.message);  //accede directoa al valor
    console.log(datos.status);  // accedendirecto al valor

    imagenGatito.src = datos[0].url;

}

 obtenerGatoAleatorio(urlAleatorios) 