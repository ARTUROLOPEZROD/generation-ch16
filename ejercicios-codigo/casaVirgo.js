/* Una juguetería tiene mucho éxito en dos productos: payasos y muñecas. Suele hacer venta por  correo y la empresa de logística les cobra por paquete, así que deben calcular el peso de los paquetes que se enviaran. Cada payaso pesa 112 gramos y cada muñeca 75 gramos.

Escribe un programa que lea el número de payasos y muñecas vendidos y calcula el peso total del pedido que será enviado, considerando que el peso máximo del paquete es de 1kg.

Muestra en alertas el peso total por cada artículo
Muestra en alertas cuántos paquetes se enviaran  */

let pallasos = parseInt(prompt('¿Cuantos pallasos comprará? \n Ingrese cantidad'));
let muñecas = parseInt(prompt('¿Cuantas muñecas comprará? \n Ingrese cantidad'));

function juguetes (pallasos ,muñecas) {

pesoPallasos = (pallasos * .122);
pesoMuñecas = (muñecas * .75);

pesoTotal= (pesoPallasos + pesoMuñecas);
    
}
let envios = juguetes();
console.log+alert('la cantidad de envios es '  + envios + '\nLa cantidad de pallasos vendidos es: ' + pallasos + '\nLa cantidad de muñecas vendidas es: '+ muñecas);
