

/// arregloes
/// coleccion de elementos
// cada arreglo ocupa una posicion
// esa posicion se conoce como indice y comienza a partir de cero

let arr = [1,2,3,4];
console.log(arr);

// propiedades   -  describen
/// metodos   -  acciones que puede realizar

console.log(arr[2]);
arr[4] = 190;          // los arreglos se puden cambiar de manera facil
arr[4] = 'Hola'     // cada valor se separa con []
console.log(arr);


// metodos de arreglos

const arreglo = ['adios'];


// push()   // agrega al final de arreglo un valor o lemento

arreglo.push(2);
arreglo.push(true);

let num = 500;
arreglo.push(num);

console.log(arreglo);

//unshift()   // agrega al inicio  o principio un valor o elementos

arreglo.unshift('A');
arreglo.unshift('B');

console.log(arreglo);


// con typeof podemos ver que tipo de dato es el elemento que llmamos

console.log(typeof (arreglo[4]));


// Metodos para quitar elementos

// pop()    // este metodo quita el ultimo elemento -- aun estando vacio

// al guardarlo en variable regresa el elemento quitado

let dato1 =  arreglo.pop();
console.log(dato1);

console.log(arreglo);



// shift()
// permite quitar un elemento del inicio del arreglo
// al guardarlo en variable regresa el elemento agregado

 let dato2 = arreglo.shift();
 console.log(dato2);

console.log(arreglo);



     //Splice()
// permite quitar una parte o elemento de cualquier posicion d enuestro arreglo

arreglo.splice(1, 1);

console.log(arreglo);

// tambien agrega o reemplazar elementos en una pisicion en especifico
//la posicion y la cantidad afectados 

arreglo.splice(1, 1, 'parangghkga', 15638);

//   splice (posicion de inicio , cantidad delementos a afectar ,
//   elementos que queremos incertar)

console.log(arreglo);

// MODIFICAN EL ARREGLO ORIGINAL

// Metodos que no modofocan el arreglo orginal
// hacen una copia, modifican esa copia

    // slice()
// cortar partes de un arreglo

 let dato3 = arreglo.slice(0, 2);

// debemos indicar un rango
// genera un arreglo con ,os elementos cortados
 
 console.log(dato3);
 
 console.log(arreglo);

 












