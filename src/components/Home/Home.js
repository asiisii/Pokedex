import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
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
    {cards}
    </>
  )
}


export default Home
