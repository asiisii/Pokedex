import React from 'react';
import './PokemonCard.css'
import { Link } from 'react-router-dom';

const PokemonCard = ({id, img, name}) => {
  return (
    <Link to={`/${id}`} className="pokemon-card">
      <img
      id = {id}
      src={img}
      alt={`${name} picture`}
      />
      <h1>{name}</h1>

    </Link>
  )
}

export default PokemonCard
