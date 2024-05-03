
//---> Que hace la funcion? obtiene un pokemon o un id? el nombre de la funcion debe indicar lo que hace la funcion realmente
//---> Si es un fichero para funciones no debe ser jsx porque no es un componente de React, deberia ser js

export const obtenerPokemon = () => {
    const id = Math.floor(Math.random() * 150) + 1
    return id;
}