/* let x = 10;
console.log(x.length);


let persona = {
    nombre: 'Artuto',
    apellido: 'López',
    edad: 29,
    correoElectronico:'alr@gmail.com'
}
let redefinir = new Object();
redefinir.nombre = 'Pepito';
redefinir.edad = 50;
redefinir.correoElectronico = 'atjo@gmail.com';
console.log(redefinir); */

let persona = {
    nombre: 'Juan',
    apellido: 'Fernandez',      // esto es lo mismo que lo anterior solo es una forma de llamar a los atributos y concatenarlos
    edad: 23,
    email:'usuario@servidor.com',  // se esta creando un objeto de forma comun
   /*  nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido; 
    }*/

    idioma: 'español',

    get leng() {          // 'get' es un metodo accesor, para acceder  los atributos de los objetos
        return this.idioma.toUpperCase();  // recibe munusculas y retorna mayusculas
    
    },
    set leng(lang) {                      //
        this.idioma = lang.toLowerCase();     // regresa minusculs
    }                                      
}
console.log(persona.leng);
//persona.leng = 'ESPAÑOL';
//console.log(persona.leng);
console.log(persona.idioma);





persona.tel = '555567890';  // de esta manera se le agrega atributo al objeto
console.log(persona);

persona.te1 = '123456890';  // en este caso lo ejecuta pero solo remplaza o sobreescribe el nuevo valor
console.log(persona);

console.log(persona.nombre);
//console.log(persona.nombreCompleto());

// let algo = new Object();   // asi tambien se esta creando un objeto de forma clasica


/* For in  */
// demostrar el recorrido de los atributos

for (varPropiedad in persona){
    console.log(persona[varPropiedad]);
}

let personaString = JSON.stringify(persona);
console.log(personaString);




