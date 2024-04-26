import { useEffect, useState } from "react";


export default function App() {
  const [infoPokemon, setInfoPokemon] = useState("")

  const obtenerPokemon = () => {

    const id = Math.floor(Math.random() * 150) + 1

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => {
        setInfoPokemon(data)
      })
  }
  useEffect(() => {
    obtenerPokemon()
  }, [])
}