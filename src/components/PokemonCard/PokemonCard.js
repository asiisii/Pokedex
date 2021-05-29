import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({id, img, name}) => {
  return (
    <Link to={`/${id}`}>
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
