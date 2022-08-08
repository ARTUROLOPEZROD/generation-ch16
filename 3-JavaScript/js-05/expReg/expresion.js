
/* 
let texto ='hoy parece que va a salir el sol';
let buscar = /sol/;
console.log(buscar.test(texto)); */

 //test es un metodo para objetos de tipo regExp

/* let texto01 ='la espero en el aeropuerto de LA';
let buscar = /LA/;
console.log(buscar.test(texto01)); */
 

// es una comparacion exacta
let texto03 ='te marqué anch';
let buscar1 = /[eo]/;           // aqui busca las letras la que primero encuentre
                                // asi como e||o como un or
//console.log(buscar.test(texto03));

/* let texto04 = ' 4.0567';
let buscar = /[aeiou]/;
console.log(buscar.test(texto04)); */



/* let texto04 = ' 4.0567';
let buscar = /[9 - 5]/;             // busca concidencias y no diferencia si es numerico o de texto
console.log(buscar.test(texto04)); */


/* let texto04 = 'los numeros primos son 2 3 57 dentro de los 10 primeros numeros';
let buscar = /\d{3}/;               /// estamops especificando que encuentre una cantidad especifica de digitos
console.log(buscar.test(texto04)); */    // al mismo tiempomesta expresion buscaria un cifra de tres numero o valores



let texto04 = 'usuario@servidor.com';         //{2,3}   dice que despues del punto deben de ser letras y puden ser 2 o 3
let buscar = /[\w]+@{1}[≠\w]+\.[a-z]{2,3}/;    //un ejemplo de uso es comprovar una contraseña valida         
console.log(buscar.test(texto04));     //  que tenga al menos una letra mayúscula, un numero, mínimo de 8 caracteres






























