import React, { useEffect, useState } from "react";
import { obtenerPokemon } from "./ObtenerPokemon";

export default function PokemonCard() {
    const [id, setId] = useState(null);
    const [pokemon, setPokemon] = useState(null);
    const [cargando, setCargando] = useState(false);

    const asignarPokemon = async () => {
        setId(obtenerPokemon())
    }

    const getPokemon = async () => {
        setCargando(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data)
        setCargando(false)
    };

    useEffect(() => {
        // Llamada a getPokemon solo si id no es null
        if (id !== null) {
            getPokemon();
        }
    }, [id]);

    //Llamada a asignarPokemon fuera del useEffect
    useEffect(() => {
        asignarPokemon();
    }, []);

    return (
        <>
            {pokemon && (
                <div className="bg-white flex flex-col items-center rounded-lg relative z-10 overflow-hidden w-75 h-75">
                    <img src=".\src\img\bg-pattern-card.svg" className="absolute top-0  -z-10" />
                    <div className="overflow-hidden  w-52 h-52 bg-white rounded-full">
                        {cargando ? (
                            <img className="w-full h-full" src="pokemon\src\img\icons8-cargando-50.png" alt="Cargando..." />
                        ) : (
                            <img className="w-full h-full" src={pokemon?.sprites.other.dream_world.front_default} alt="pokemon" />
                        )}
                    </div>
                    <div className="flex mx-auto items-center">
                        <p className="font-bold">{pokemon?.name} </p>
                        <p className="text-gray-400">{pokemon?.stats[0].base_stat}hp</p>
                    </div>
                    <div>
                        <p className="text-gray-400 mb-4">{pokemon?.base_experience} exp</p>
                    </div>
                    <div className="flex border-t border-gray-400 text-sm mb-2 pt-2">
                        <div className="mx-3 text-center">
                            <p className="font-bold">{pokemon?.stats[1].base_stat}k</p>
                            <p className="text-gray-500">Attack</p>
                        </div>
                        <div className="mx-3 text-center">
                            <p className="font-bold">{pokemon?.stats[3].base_stat}k</p>
                            <p className="text-gray-500">Special-Attack</p>
                        </div>
                        <div className="mx-3 text-center">
                            <p className="font-bold">{pokemon?.stats[2].base_stat}k</p>
                            <p className="text-gray-500">Defense</p>
                        </div>
                    </div>
                    <button onClick={asignarPokemon} className="w-40 h-7 bg-green-300 my-3">generar pokemon</button>
                </div>
            )}
        </>
    );
}