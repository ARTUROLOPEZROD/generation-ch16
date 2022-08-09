// variable que simula los datos pedidos

const saludo = 'Hola mundo'
const datos = [
    {
    nombre: 'Jonathan',
    apellido: 'Vazquez'
    },
    {
        nombre: 'Jonathan',
    apellido: 'Vazquez'
    },
    {
        nombre: 'Jonathan',
    apellido: 'Vazquez'
    }
]

// funcion para simular una peticion
function obtenerDatos(){
                                                 // reject -- si la promesa no se cumple

return new Promise( (resolve, reject) => {     //resolve -- si la promesa se cumple
                                             
        setTimeout( () => {
            if(false){
                resolve(datos)
            } else {
                reject('no se pudo obtener datos')   // rejec regresa lo que se pide si no se cumple la promesa
            }
        resolve (datos);
        }, 1000)

})
}
            ///  FORMA #1

//console.log(obtenerDatos());  me regresaria soilo promesa por esta esperando a que se complete la ejecucion

obtenerDatos().then( (datos) => {  // datos -- reasigancion del nombre del valor del dato
    console.log(datos);        // este se ejecutara  cuando la promesa se cumpla
                                 // devuelve lonque yo le pido --- datos
   

}).catch((error) =>{
    console.log('existe error ');
    console.log(error);
})                           

            ////  FORMA #2
//  funciones asincronas - await async

async function funcionAsincrona() {    //async -- la convierte en asincrona para que funcione await
    try{

        const datos = await obtenerDatos()  // await -- hace que espere a que se resuelta y ya resuelto lo guarda en datos
        console.log(datos);

    }catch(error){

        console.log(error);

    }
     
}
funcionAsincrona()


