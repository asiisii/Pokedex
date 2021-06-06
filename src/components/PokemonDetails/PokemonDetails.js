import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import caughtBall from  '../../Assets/caughtBall.png'
import fetchPokemonData  from '../../apiData/apiCalls';
import uncaughtBall from '../../Assets/uncaughtBall.png'
import getPokemonDetails from '../../apiData/cleanApiCalls';
import './PokemonDetails.css';

const PokemonDetails = ({id, caught, favorite}) => {
  const [pokemonDetails, setPokemonDetails] = useState('')
  const [error, setError] = useState('')
  const [pokemonForm, setPokemonForm] = useState(``)

  const fetchSinglePokemonInfo = async (id) => {
    setError('')
    try {
      const fetchedPokemonDetails = await fetchPokemonData(`/${id}`)
      setPokemonDetails(getPokemonDetails(fetchedPokemonDetails))
      setPokemonForm(`https://play.pokemonshowdown.com/sprites/xyani/${fetchedPokemonDetails.name}.gif`)
    } catch (e) {
      setError('Request failed')
    }
  }

  useEffect(() => {
    fetchSinglePokemonInfo(id)
  }, [id])

  const regularForm = () => {
    setPokemonForm(`https://play.pokemonshowdown.com/sprites/xyani/${pokemonDetails.name}.gif`)
  }

  const shinyFrom = () => {
    setPokemonForm(`https://play.pokemonshowdown.com/sprites/ani-shiny/${pokemonDetails.name}.gif`)
  }

  return(
    <>
      {!pokemonDetails && !error && <h1 className='loading'>Loading...catching Pokemons</h1>}
      {error && <h1>{error}</h1>}
      {pokemonDetails && !error &&
        <section className={`pokemon-info ${pokemonDetails.types.split('|')[0]}`}>
          <div className="info-header">
            <Link to='/'>
              <i className="fas fa-arrow-left"></i> Go back
            </Link>
            <h1 className="pokemon-name" >{(pokemonDetails.name).toUpperCase()}</h1>
            <button className="pokeball" onClick={() => {
              favorite(pokemonDetails.name);
            }}>
              <img src={caught.includes(pokemonDetails.name) 
                ? caughtBall 
                : uncaughtBall} 
                alt="pokeball"></img>
            </button>
          </div>
          <div className='pokemon-container'>
            <div className="pokemon-holder">
              <div className='form-control'>
                <button onClick={regularForm} className={`${pokemonDetails.types.split('|')[1]}`}>Regular Form</button>
                <button onClick={shinyFrom} className={`${pokemonDetails.types.split('|')[1]}`}>Shiny Form</button>
              </div>
              {pokemonDetails.name === 'nidoran-m' ? pokemonDetails.name = 'nidoran' : null}
              <img src={pokemonForm} alt={pokemonDetails.name} className='pokemon' />
            </div>
            <div className={`pokemon-detail ${pokemonDetails.types.split('|')[1]}`}>
              <p>Weight: {pokemonDetails.weight}</p>
              <p>Height: {pokemonDetails.height}</p>
              <p>Types: {pokemonDetails.types}</p>
              <p>Abilities: {pokemonDetails.ability}</p>
              <p>Moves: {pokemonDetails.moves}</p>
            </div>
          </div>
        </section>
      }
    </>
  )
}
export default PokemonDetails;
