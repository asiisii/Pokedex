import React, { useEffect, useState } from 'react';
// import React, { Component } from 'react';
import fetchPokemonData  from '../../apiData/apiCalls';
import getPokemonDetails from '../../apiData/cleanApiCalls';
import Navbar from '../Navbar/Navbar';
import './PokemonDetails.css';
import uncaughtBall from '../../Assets/uncaughtBall.png'
import caughtBall from  '../../Assets/caughtBall.png'
import { Link } from 'react-router-dom'

// class PokemonDetails extends Component {
const PokemonDetails = ({pokiId, caught, favorite}) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     pokemonDetails: '',
  //     id: props.id,
  //   }
  // }
  const [pokemonDetails, setPokemonDetails] = useState('')
  // const [id, setId] = useState(pokiId)
  const [error, setError] = useState('')

  // render() {
    // const { pokemonDetails, id } = this.state;
    return(
      <>
      <Navbar />
      {pokemonDetails &&
        <section className="pokemon-info">
          <div className="info-header">
            <Link to='/'><i className="fas fa-arrow-left"></i> Go back</Link>
            <h1 className="pokemon-name" >{pokemonDetails.name}</h1>
            <button className="pokeball" onClick={() => {
              favorite(pokemonDetails.name);
            }}>
              <img src={caught.includes(pokemonDetails.name) ? caughtBall : uncaughtBall} alt="pokeball"></img>
            </button>
          </div>
          <div className="pokemon-holder">
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokiId}.png`} alt={pokemonDetails.name} className='pokemon' />
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
  // }
}
export default PokemonDetails;
