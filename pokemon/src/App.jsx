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
        <div class="bg-white flex flex-col items-center">
          <img class="rounded-full w-40 h-auto mb-6" src={pokemon?.sprites.other.showdown.front_default} alt="pokemon"></img>

          <div class="flex mx-auto items-center">
            <p class="font-bold">{pokemon?.name}</p>
            <p class="text-gray-400 mb-1">{pokemon?.stats[0].base_stat}hp</p>
          </div>
          <div>
            <p class="text-gray-400 mb-4">{pokemon?.base_experience} exp</p>
          </div>
          <div class="flex border-t border-gray-400 ">
            <div class="mx-3 text-center">
              <p class="font-bold">{pokemon?.stats[1].base_stat}</p>
              <p class="text-gray-500">Attack</p>
            </div>
            <div class="mx-3 text-center">
              <p class="font-bold">{pokemon?.stats[3].base_stat}</p>
              <p class="text-gray-500">Special-Attack</p>
            </div>
            <div class="mx-3 text-center">
              <p class="font-bold">{pokemon?.stats[2].base_stat}</p>
              <p class="text-gray-500">Defense</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}