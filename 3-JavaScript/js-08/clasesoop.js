class Persona{          // clase - persona
    
    constructor(nombre, apellido){ 
        this.nombre = nombre;
        this.apellido = apellido;
    }
 get nombre(){          // get metodo que retorna algo que se especifica
    return this.nombre;       //_ hace un elemento publico usando this.
}                              // get y set son metodos de acceso a atriutos privados
set nombre(nombre){            //ser coloca un valor a un atributo  usando this.
    this.nombre = nombre;
}

}

let persona1 = new Persona('Jose','Perez');
console.log(persona1);

persona1.nombre = 'Hugo Sanchez';
console.log(persona1.nombre);


let persona2 = new Persona('Ana', 'Cruz');  //cada objeto es una copia de la clase Persona, y cada uno tiene sus propios valores
console.log(persona2);


/* */




class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre
    }
}

let persona1 = new Persona('David','Castellanos');

console.log(persona1);

persona1.nombre = 'David Guzman'

console.log(persona1.nombre);

let persona2 = new Persona ('Arturo', 'Guzman');
console.log(persona2);




