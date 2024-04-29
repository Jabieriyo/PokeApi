import React, { useEffect, useState } from "react";
import { obtenerPokemon } from "./ObtenerPokemon";

export default function App() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonId = obtenerPokemon();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    };
    getPokemon();
  }, []);

  return (
    <>
      {pokemon && (
        <div class="">
          <img src={pokemon?.sprites.other.showdown.front_default} alt="pokemon"></img>

          <div class="flex">
            <p class="font-bold">{pokemon?.name}</p>
            <p>{pokemon?.stats[0].base_stat}hp</p>
          </div>
          <div>
            exp: {pokemon?.base_experience}
          </div>
          <div>
            <div>
              Attack: {pokemon?.stats[1].base_stat}
            </div>
            <div>
              Special-Attack: {pokemon?.stats[3].base_stat}
            </div>
            <div>
              Defense: {pokemon?.stats[2].base_stat}
            </div>
          </div>
        </div>
      )}
    </>
  );
}