import React from 'react'
import uncaughtBall from '../../Assets/uncaughtBall.png';
import caughtBall from  '../../Assets/caughtBall.png'
import PokemonCard from '../PokemonCard/PokemonCard';
import Navbar from '../Navbar/Navbar';


export default function Caught({pokemons, caught, favorite}) {
  const caughtPokemon = pokemons.filter(critter => caught.includes(critter.name))
  const caughtPokemonCards = caughtPokemon.map((pokemon, index) => {
    const getId = pokemon.url.split('/')[6];
    const favoritePokemon = caught.includes(pokemon.name);
    const soloPic = `https://pokeres.bastionbot.org/images/pokemon/${getId}.png`;
    return (
      <PokemonCard
        favorite={favorite}
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
    <Navbar />
    <div className="card-display">
    {caughtPokemonCards}
    </div>
    </>
  )
}

