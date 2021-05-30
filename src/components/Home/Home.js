import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';
import './Home.css';
import uncaughtBall from '../../Assets/uncaughtBall.png';
import caughtBall from  '../../Assets/caughtBall.png'

const Home = ({pokemons, caught, favorite}) =>{
  const cards = pokemons.map((pokemon, index) => {
    const getId = index + 1;
    const favoritePokemon = caught.includes(pokemon.name);
    const soloPic = `https://pokeres.bastionbot.org/images/pokemon/${getId}.png`;
    return (
      <PokemonCard
        pokeball={!favoritePokemon ? uncaughtBall : caughtBall}
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
