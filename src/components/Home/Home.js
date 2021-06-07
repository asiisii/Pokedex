import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = ({pokemons, caught, favorite, error}) =>{
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
    <Navbar />
    {error && <h1>{error}</h1>}
    {!caught && <h1 className='loading'>Loading...</h1>}
    {caught &&
      <div className="card-display">
        {cards}
      </div>
    }
    </>
  )
}


export default Home
