
// Control de flujo

/* let nombre = 'Arturo'
let edad = 23;  */


let nombre = prompt('Escribe tu nombre');
console.log(nombre);


// casteo - convertir un tipo de dato

let edad = parseInt(prompt('Escribe tu edad'));

console.log(typeof edad);



if(nombre === 'Arturo' && edad === 23){
    // scope - contexto (alcance)
    console.log('Eres un');
    console.log('ADMIN 😎');

} else if (nombre === 'Maria'){

   console.log('Eres un mentora');

} else if (nombre === "Marina"){
     
    console.log("Eres la jefa");

} else {

     console.log('Escribiste mal el nombre');

}

console.log('Fin del programa');

















