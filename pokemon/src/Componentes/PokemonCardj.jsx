import React, { useEffect, useState } from "react";
import { obtenerIdAleatorio } from "./obtenerIdAleatorio";

export default function PokemonCard() {
    const [id, setId] = useState(null);
    const [pokemon, setPokemon] = useState(null);
    const [cargando, setCargando] = useState(false);

    const asignarPokemon = () => {
        setId(obtenerIdAleatorio());
    };

    //---> Funciona bien, pero cambia la forma del fetch y utiliza el then para contatenar el siguiente paso con "data"
    //hecho
    const getPokemon = async () => {
        setCargando(true)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(res => {
                setPokemon(res)
                setCargando(false)
            })

    };

    const handleClick = () => {
        asignarPokemon();
    };

    useEffect(() => {
        if (id == null) {
            asignarPokemon()
        } else {
            getPokemon()
        }
    }, [id])



    return (
        <>
            {pokemon && (
                <div className="bg-white flex flex-col items-center rounded-lg relative z-10 overflow-hidden w-75 h-96">
                    <img src=".\src\img\bg-pattern-card.svg" className="absolute top-0  -z-10" />
                    <div className="overflow-hidden  w-52 h-52 bg-white rounded-full mt-5">
                        {cargando ? (
                            <img className="w-full h-full animate-spin" src="../src/img/cargando.png" alt="Cargando..." />
                        ) : (
                            <img className="w-full h-full" src={pokemon?.sprites.other.dream_world.front_default} alt="pokemon" />
                        )}
                    </div>
                    <div className="flex mx-auto items-center mt-2">
                        <p className="font-bold">{pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)} &nbsp;</p>
                        <p className="text-gray-400">{pokemon?.stats[0].base_stat}hp</p>
                    </div>

                    <p className="text-gray-400 mb-4">{pokemon?.base_experience} exp</p>
                    <div className="flex border-t border-gray-400 text-sm mb-2  pt-2">
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
                    <button
                        onClick={handleClick}
                        disabled={cargando}
                        className={`w-40 h-7 mb-3 ${cargando ? 'bg-red-300' : 'bg-green-300'}`}
                    >
                        {cargando ? 'Cargando...' : 'Generar Pokémon'}
                    </button>
                </div>
            )}
        </>
    );
}