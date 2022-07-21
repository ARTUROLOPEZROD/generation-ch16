
const personas = ['Maria' ,'Dani','Luis', 'Juan','Camila'];


//Escribe un comando para remover a "Dani" del arreglo

//persona.solice(1, 1, "Beto"); //persona[1] = "Beto"
personas.splice(1, 1);
console.log(personas);

//Escribe un comando para remover a "Juan del arreglo"

personas.splice(2, 1);
console.log(personas);

//Escribe un comando para agregar a "Luis" al inicio del arreglo
//let persona =personas.spleve(1,1);
//console.log(persona[0]);

personas.splice(1,1);

personas.unshift("Luis");

//personas.unshift(personas.splice(1,1)[0]);
console.log(personas);

//Escribe el comando para agregar tu nombre al final del arreglo
personas.push("Raul");
console.log(personas);

//Escribe el comando para mostrar la posición de "Maria"
console.log(personas.indexOf("Maria"));

//Escribe el comando para mostrar la posición de tu nombre
console.log(personas.indexOf("Raul"));