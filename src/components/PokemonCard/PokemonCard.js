import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({id, img, name}) => {
  return (
    <div className="pokemon-card">
      <img 
      id = {id}
      src={img} 
      alt={`${name} picture`}
      />
      <h1>{name}</h1>
      
    </div>
  )
} 

export default PokemonCard