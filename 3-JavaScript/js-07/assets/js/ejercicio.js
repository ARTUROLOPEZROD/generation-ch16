`use strict`

/*URL´s para consumir */
const urlAleatorios = "https://api.thecatapi.com/v1/images/search"

/*Elementos del DOM */
const imagenGatito=document.getElementById("img-gatito");
//console.log(imagenPerrito)
const btn=document.getElementById("btn-gatos");
console.log(btn);

/* Eventos*/
btn.addEventListener("click",()=>{
    console.log("Boton presionado");
    //Agregar la funcionalidad
    obtenerGatitoAleatorio(urlAleatorios)
})
async function obtenerGatitoAleatorio(url1){
    const respuesta=await fetch(url1)
    const datos=await respuesta.json()


    imagenGatito.src=datos[0].url;
}
//obtenerPerritoAleatorio(urlAleatorios)