'use strict';


/* Para declarar una funcion se debe poner
el nombre de la funcion si son mas de dos palabras 
debe ir en camelCase */


function miSuma (a, b) {
    let resultado = a+ b;
    console.log("La suma es:" + resultado);
}
miSuma(2, 3);

//otra forma de declarar una funcion

function miSuma (a, b) {
   
    console.log("La suma es:", + (a + b));
}
miSuma(4, 6);

//otra forma de declarar una funcion

function miProducto (a, b) {
   return (a * b);
}
console.log('el producto es ' + miProducto(4 , 5));

//otra forma de declarar una funcion


function miResta (a, b) {
   return (a - b);
}
let res = miResta(10, 4);
console.log('La resta es '+ res);



    

function miNombre (nombre, apellidoP, apellidoM) {
    return (nombre + apellidoP + apellidoM)
    
}
let nombre = 'Arturo';
let apellidoP = 'Lopez';
let apellidoM = 'Rodriguez';

console.log('Mi nombres es '+ miNombre(nombre , apellidoP , apellidoM));



function division (a, b) {
    let resultado = a / b;
    console.log("El residuo es:" + resultado);
}
division(2, 3);
