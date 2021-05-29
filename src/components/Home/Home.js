import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'
import './Home.css'
const Home = ({pokemons}) =>{
  // console.log(pokemons);
  // const id;
  const cards = pokemons.map((pokemon, index) => {
    // const getId = pokemon.url.split('/')[6]]
    const getId = index + 1
    const soloPic = `https://pokeres.bastionbot.org/images/pokemon/${getId}.png`
    console.log(getId);
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
    <div className="card-display">
    {cards}
    </div>
  )
}


export default Home