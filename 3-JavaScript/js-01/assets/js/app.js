'use strict';
/* JavaScript de forma estricta */

/* Tipos de variables */

let a = 20;             // local
const b = 0;           //constante y local
var c;                //global ---esta no se debe usar por seguridad del codigo---

const PI = 3.1416;

/* 
scope - contexto
espacio en el que vive la variable 
*/


if(true){
    var d = 15;
}

/* var d = 'hola' */
// console.log(d);


/* Tipo de datos */

//String
let cadena = "Hola Mundo!";
let cadenas = 'Hola Mundo!';

//Number
let numero = 5;           // numero con '' se iterpreta como string -texto-
let numeros = 5.89; 
let num = -5.89;

// Boolean
let boolean = true;
let booleano = false;

//undefined -  indefinido  ---estado de una variable indefinida---
let variable;
/* console.log(variable); */


//null
let vacio = null;
//console.log(vacio);


//NaN  - Not a number     ---no es un número---
//trata de realizar una operación aritmética con algún dato que no es un número

/* Plantillas literales
        templete strings
        literal strings
        interpolación
*/
/* console.log(`Esta es una cadena ${5+4}`);
console.log("Esta es una cadena ${5+4}");   */  // diferencia en el uso

let nombre = 'Arturo';

//let presentacion = ``;
/* console.log('Mi nombre es' + nombre);
console.log(`yo me llamo ${nombre}`);   // interpolacion
 */

/*console.log("<h1>Hola</h1>");
console.log(`<h1>Hola</h1>`); */

/* Arreglos - matrices- arrays */
let arr = [1, 'A', null, undefined, [true, false]];

//Notación de corchetes
//console.log(arr[4][0]);

if (arr.length >= 5){
    //console.log('tiene más de 5 elementos');
}
if (arr[4][0] === true){
    //console.log('es verdad');
}

let arr2 = new Array('B', 2);
//console.log(arr2);

/* Objetos */
//clave / valor


const persona = {          // los objetos - propiedades - se separan con ,
    nombre: 'Raul',
    edad: 31,
    hobbies: [
        'Leer',
        'Ver Srek 1 y 2',
        'comer'
    ],
    auto: {
        marca: 'VW',
        modelo: 'pointer',
        year: 2000,
    },
    saludar: function (){
       return 'Saludar';
    }
};


persona.nombre = 'Panchito'   /*  la notacion de punto . permite acceder
                                 a la variable y cambiar el valor  */

// Notacion de puntos
console.log(persona.nombre);

console.log(`mi nimbre es ${persona.nombre}`);

console.log(`Mi hoobie favorito es ${persona.hobbies[1]}`);

console.log(`La marca de mi auto es ${persona.auto.marca}`);

console.log(persona.saludar());  // PARA LLAMAR A UNA FUNCION SIEMPRE USAR ()

console.log(`La accion que realizo es: ${persona.saludar()}`);





//Json    ---transmitir informacion - un arreglo con muchos objetos dentro ---
//Arreglo de objetos
/* [{}, {}, {}] */





