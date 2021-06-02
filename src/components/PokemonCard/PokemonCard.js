import React from 'react';
import './PokemonCard.css'
import { Link } from 'react-router-dom';


const PokemonCard = ({id, img, name, pokeball, favorite}) => {
  return (
    <div className="pokemon-card">
      <button className="pokeball" onClick={() => {
        favorite(name);
      }}>
      <img src={pokeball} alt="Pokeball" />
      </button>
      <Link to={`/${id}`} >
        <img
        className="pokemon-pic"
        id = {id}
        src={img}
        alt={`${name} posing`}
        />
        <h1>#{id}. {name}</h1>
      </Link>
    </div>
  )
}

export default PokemonCard
