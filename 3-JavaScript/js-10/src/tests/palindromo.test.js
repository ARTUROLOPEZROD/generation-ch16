const palindromo = require('../js/palindromo.js');

describe('Pruebas de la funcion palindromo', () =>{
      
     test('debe regresar "Es un palindromo" si ingresamos ojo', () => {
         let mensaje = 'Es un palindromo';
         let palabra = 'ojo';

         expect( palindromo(palabra) ).toBe(mensaje);
     })

     test('no debe regresar "Es un palindromo" al infresar generation', () =>{
        let mensaje = 'Es un palindromo';
        let palabra = 'generation';

        expect( palindromo(palabra) ).not.toBe(mensaje);
     })


     test('al ingresar un numero debe regresar el mensaje', () => {
         let mensaje = 'no es una palabra';
         let valor = 2;

         expect( palindromo(valor) ).toBe(mensaje);
     })

});