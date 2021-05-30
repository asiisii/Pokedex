import React from 'react';
import './PokemonCard.css'
import { Link } from 'react-router-dom';
import uncaughtBall from '../../Assets/uncaughtBall.png';
import caughtBall from  '../../Assets/caughtBall.png'

const PokemonCard = ({id, img, name}) => {
  return (
    <Link to={`/${id}`} className="pokemon-card">
      <img ></img>
      <img
      id = {id}
      src={img}
      alt={`${name} posing`}
      />
      <h1>{name}</h1>

    </Link>
  )
}

export default PokemonCard
