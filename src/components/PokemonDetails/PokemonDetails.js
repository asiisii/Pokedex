import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import caughtBall from  '../../Assets/caughtBall.png'
import fetchPokemonData  from '../../apiData/apiCalls';
import uncaughtBall from '../../Assets/uncaughtBall.png'
import getPokemonDetails from '../../apiData/cleanApiCalls';
import './PokemonDetails.css';

const PokemonDetails = ({pokiId, caught, favorite}) => {
  const [pokemonDetails, setPokemonDetails] = useState('')
  const [error, setError] = useState('')

  const fetchSinglePokemonInfo = async () => {
    try {
      const fetchedPokemonDetails = await fetchPokemonData(`/${pokiId}`)
      setPokemonDetails(getPokemonDetails(fetchedPokemonDetails))
    } catch (e) {
      setError('Request failed')
    }
  }

  useEffect(() => {
    fetchSinglePokemonInfo()
  }, [])

  return(
    <>
      <Navbar />
      {pokemonDetails &&
        <section className="pokemon-info">
          <div className="info-header">
            <Link to='/'>
              <i className="fas fa-arrow-left"></i> Go back
            </Link>
            <h1 className="pokemon-name" >{pokemonDetails.name}</h1>
            <button className="pokeball" 
              onClick={() => {
                favorite(pokemonDetails.name);
            }}>
              <img src={caught.includes(pokemonDetails.name) 
                ? caughtBall 
                : uncaughtBall} 
                alt="pokeball"></img>
            </button>
          </div>
          <div className="pokemon-holder">
            <img className='pokemon'
            src={`https://pokeres.bastionbot.org/images/pokemon/${pokiId}.png`} 
            alt={pokemonDetails.name}  />
          </div>
          <div className='pokemon-detail'>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>Height: {pokemonDetails.height}</p>
            <p>Types: {pokemonDetails.types}</p>
            <p>Abilities: {pokemonDetails.ability}</p>
            <p>Moves: {pokemonDetails.moves}</p>
          </div>
        </section>
      }
    </>
  )
}
export default PokemonDetails;
