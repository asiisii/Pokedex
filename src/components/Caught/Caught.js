import React from 'react'

export default function Caught({pokemons, caught, favorite}) {
  const caughtPokemon = pokemons.filter(critter => caught.includes(critter.name))
  console.log(caughtPokemon);
  return (
    <div>
      
    </div>
  )
}
