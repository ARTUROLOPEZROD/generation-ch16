
/* URL a consumir */
const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/'

/* elementos del DOM */
const imgPokemon = document.getElementById('img-pokemon')

const idPokemon = document.getElementById('id-pokemon')

const nombrePokemon = document.getElementById('nombre-pokemon')

const listaHabilidades = document.getElementById('lista-habilidades')

const listaTipos = document.getElementById('lista-tipos')

const formulario = document.getElementById('buscador-pokemon')
console.log(formulario);

/* eventos */

formulario.addEventListener('submit', (e) => {  //submit recarga la pagina, (e) inicializa el evento

  e.preventDefault()

const inputPokemon = document.getElementById('busqueda-pokemon')
console.log(inputPokemon.value);

const nuevaBusqueda = urlPokemon + inputPokemon.value
console.log(nuevaBusqueda);


obtenerPokemon(nuevaBusqueda)


})
/* Funciones */

async function obtenerPokemon(url){

  try {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
  
    /* console.log(datos);
    console.log(datos.forms[0].name);
    console.log(datos.abilities);
    console.log(datos.id);
    console.log(datos.types);
    console.log(datos.sprites.other['official-artwork'].front_default); */
    
      const pokemon = {
        nombre: datos.forms[0].name,
        habilidades: datos.abilities,
        id: datos.id,
        tipos: datos.types,
        imagen: datos.sprites.other['official-artwork'].front_default
  
      }
    
      // imagen, nombre y id
      imgPokemon.src = pokemon.imagen;
      idPokemon.textContent = `ID: ${pokemon.id}`;
      nombrePokemon.textContent = pokemon.nombre;
  
      // habilidades             // innerHTML reemplaza el interior con += lo que tiene tambien se agrega
      
      let template = ``
      
      for(let i=0; i < pokemon.habilidades.length; i++) {
        
        const nombreHabilidad = pokemon.habilidades[i].ability.name
        
        template += `<li class="list-group-item"> ${nombreHabilidad} </li>`   //${ } interpolar += suma y no sobrescribe
    }
      
      listaHabilidades.innerHTML = template;
  
  
    // tipos
  
  
    let templateTipos = ''
  
    pokemon.tipos.forEach((tipo) => {       // forEach reasignacion del nombre
      const nombreTipo = tipo.type.name
      
  
      templateTipos += `<li class="list-group-item"> ${nombreTipo} </li>`   //${ } interpolar += suma y no sobrescribe
  
    })
    
    listaTipos.innerHTML = templateTipos
      

  }catch(e) {
alert('Pokemon no valido')   // try , contiene el codigo funcional
                            // catch , para imprimir error al no cumplir el codigo
  }

}

