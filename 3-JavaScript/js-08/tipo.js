
/* tipo predefinido */
let tiempo = new Date();
console.log(tiempo);
console.log(Math);   // no necesita ser llamada por un objeto ni se crea una variable es "estatica"

// todos los nombres de clases empiezan con mayusculas sin importar si son estaticas o no.

let obj_literal = {
    nombre: 'Juan',  // estes es un objeto literal
    edad: 35         // no esta definodp, no tiene clase es ABSTRACTO
}

let obj_constructor = new Object();   // OBJECT clase base que lo crea en objeto literal
obj_constructor.nombre = 'Dora';   // reutuliza y redefiniendo al llamar otro objeto
obj_constructor.edad = 23;   // se convierten en otros objetos reutilizados
console.log(obj_literal);
console.log(obj_constructor); // cuando se invoca, se crea una copia del plano original, lo que se modifica es la copia, no la clase base

obj_literal['nombre'];  // aqui le ponermos candado o llave para mo poderlo modificar
let llave = 'nombre';
console.log('esto es con llave ' + obj_literal [llave]);



/* Tipo cadena */

let cadena = 'esto es una cadena';   //define un objeto de manera primitiva
let cadena_obj = new String('Esto es otra cadena obj');    /// define un objeto de manera constructor y una clase string
// new entrega la definicion de un objeto y string es la clase que define el metodo
// new permitenque definir objetos de manera clasica
console.log(cadena);
console.log(cadena_obj);     


/* Tipo numerico */
let numero = 13;
let numero_obj = new Number(13.13);   /// tipo de dato unico es el array
console.log(numero);
console.log(numero_obj);
/* tipo compuesto o unico */
let lista = ['2', '3','5','7'];
let lista_obj = new Array ('1','4','6','8','9');
console.log(lista);           // array tipo de dato compuesto o tipo de dato compuesto
console.log(lista_obj);



