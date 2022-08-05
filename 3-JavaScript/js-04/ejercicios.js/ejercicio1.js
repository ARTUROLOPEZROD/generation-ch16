

/* Parte 1
Hay tres personas esperando el banco. Sus nombres, en orden, son Sofía, David y Juan. Cree una matriz que tenga estos tres nombres en orden.

Parte 2
Se agregan dos personas más al final de la fila: Sara y Augustin. La primera persona en la fila es llamada al cajero. ¿Cómo es la cola?

parte 3
Resulta que David estaba reservando un lugar para su amiga Renata. Ella aparece y va detrás de él en la fila. Aparece una persona más (Elena) y va hasta el final de la fila. ¿Cómo es la col */


let banco = ['Sofia', 'David', 'Juan'];
console.log(banco);

banco.push('Sara', 'Agustin');
console.log(banco);

let alCajero = banco.shift();
console.log(alCajero);
console.log(banco);

banco.splice(1,1,'Renata');
console.log(banco);
banco.push('Elena');
console.log(banco);