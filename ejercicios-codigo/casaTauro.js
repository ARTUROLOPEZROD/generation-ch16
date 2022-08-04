let carreritas = ['Lucia', 'Roberto', 'Maria', 'Jesus', 'Andrea', 'Jose'];
console.log(carreritas);

/*  Andrea adelanta a Maria */
carreritas.splice(2,4);

carreritas.push('Andrea');
carreritas.push('Maria');
carreritas.push('Jesus');
carreritas.push('Jose');
console.log(carreritas);

/*  jose es descalificado de la carrera */
carreritas.pop();
console.log(carreritas);

/* detras de Lucia y antes de Roberto se clasifican tres nuevos corredores: Cristobal, Fernanda y Armando  */
carreritas.shift();

carreritas.unshift('lucia','Cristobal','Fernanda',' Armando');
console.log(carreritas);

carreritas.unshift('Federico');
console.log(carreritas);






