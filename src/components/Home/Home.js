import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';
import './Home.css';

const Home = ({pokemons, caught, favorite}) =>{
  const cards = pokemons.map((pokemon, index) => {
    const getId = index + 1;
    const favoritePokemon = caught.includes(pokemon.name);
    const soloPic = `https://pokeres.bastionbot.org/images/pokemon/${getId}.png`;
    return (
      <PokemonCard
        favorite={favorite}
        pokeball={!favoritePokemon ? false : true}
        key = {getId}
        id = {getId}
        img = {soloPic}
        name = {pokemon.name}
      />
    )
  })
  return (
    <>
    <div className="card-display">
    {cards}
    </div>
    </>
  )
}


export default Home
