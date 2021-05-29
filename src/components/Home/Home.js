import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import './Home.css'
const Home = ({pokemons}) =>{
  const cards = pokemons.map((pokemon, index) => {
    const getId = index + 1
    const soloPic = `https://pokeres.bastionbot.org/images/pokemon/${getId}.png`
    return (
      <PokemonCard
        key = {getId}
        id = {getId}
        img = {soloPic}
        name = {pokemon.name}
      />
    )
  })
  return (
    <>
    <h1>Pokédex</h1>
    <div className="card-display">
    {cards}
    </div>
    </>
  )
}


export default Home
