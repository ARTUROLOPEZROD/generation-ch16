'use strict';

function miFuncion(a, b){
    return (a + b);
}      
let resultado = miFuncion(3, 6);
console.log('El resultado es: ' + resultado);


//  --- funcion expresion o anonimas  ---
/* 
let suma = function (a ,b) {return (a + b)};
let res = suma (2, 3);
console.log('El suma es: ' + res); */

let suma = function (a ,b) {return (a + b)};
let res = suma (2, 3);
let caracteres = 'La suma es: '
console.log(caracteres + res);



// resta
let resta = function (a ,b) {return (a - b)};
let result = resta (8, 3);
console.log('La resta es: ' + result);

// multiplicacion
let multi = function (a ,b) {return (a * b)};
let resulta = multi (10, 7);
console.log('La multiplicacion es: ' + resulta);

// division
let div = function (a ,b) {return (a / b)};
let respuesta = div (10, 3);
let caracter = 'El resutado es es: '
console.log(caracter + respuesta.toFixed(2));



//   --- Self Invoking ---  una funcion que no es reutilizable solo se puede invocar una sola vez

(function (a, b){
    console.log('El resultado de Self Invoking es: '+ (a + b));
}
)(3, 4);



























