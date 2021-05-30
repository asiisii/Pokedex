import React, { Component } from 'react';
import fetchPokemonData  from '../../apiData/apiCalls';
import getPokemonDetails from '../../apiData/cleanApiCalls';
import './PokemonDetails.css';
import uncaughtBall from '../../Assets/uncaughtBall.png'
import caughtBall from  '../../Assets/caughtBall.png'
import { Link } from 'react-router-dom'

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetails: '',
      id: props.id,
      caught: localStorage.getItem(`${props.id}`) === 'true' ? true : false
    }
  }

  componentDidMount = async () => {
    const value = localStorage.getItem(`${this.state.id}`)
    this.setState({caught: value === 'true' ? true : false})
    try {
      const fetchedPokemonDetails = await fetchPokemonData(`/${this.state.id}`)
      this.setState({ pokemonDetails: getPokemonDetails(fetchedPokemonDetails)})
    } catch (e) {
      this.setState({error: 'Request failed'})
    }
  }

  toggleCatch = (e) => {
    e.preventDefault()
    localStorage.setItem(`${this.state.id}`, `${!this.state.caught}` )
    this.setState({ caught: !this.state.caught })
  }
  
  selectBall = () =>  this.state.caught ? caughtBall : uncaughtBall
  
  render() {
    const { pokemonDetails, id } = this.state
    return(
      <>
      {pokemonDetails &&
        <section className="pokemon-info">
          <div className="info-header">
            <Link to='/'>Go back</Link>
            <h1 className="pokemon-name" >{pokemonDetails.name}</h1>
            <button>
              <img 
              src={this.selectBall()} 
              alt="greyed pokeball" 
              onClick={(e) => this.toggleCatch(e)}/>
            </button> 
          </div>
          <img 
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} 
          alt={pokemonDetails.name} />
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Height: {pokemonDetails.height}</p>
          <p>Types: {pokemonDetails.types}</p>
          <p>Abilities: {pokemonDetails.ability}</p>
          <p>Moves: {pokemonDetails.moves}</p>
        </section>
      }
      </>
    )
  }
}
export default PokemonDetails;
