import React from 'react'

const PokemonCard = ({id, img, name}) => {
  return (
    <>
      <img 
      id = {id}
      src={img} 
      alt={`${name} picture`}
      />
      <h1>{name}</h1>
      
    </>
  )
} 

export default PokemonCard