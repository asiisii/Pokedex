import React, { Component } from 'react';
import { getIndividualPokemon } from '../../apiData/apiCalls';
import './PokemonDetails.css';
import uncaughtBall from '../../Assets/uncaughtBall.png'
import { Link } from 'react-router-dom'

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetails: '',
      id: props.id
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedPokemonDetails = await getIndividualPokemon(this.state.id)
      console.log(fetchedPokemonDetails)
      this.setState({ pokemonDetails: fetchedPokemonDetails})
    } catch (e) {
      this.setState({error: 'Request failed'})
    }
  }

  render() {
    const { pokemonDetails, id } = this.state
    return(
      <>
      {pokemonDetails &&
        <section className="pokemon-info">
          <div className="info-header">
            <Link to='/'>Go back</Link>
            <h1 className="pokemon-name" >{pokemonDetails.name}</h1>
            <img src={uncaughtBall} alt="greyed pokeball"></img>  
          </div>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={pokemonDetails.name} />
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Height: {pokemonDetails.height}</p>
          <p>Base experience: {pokemonDetails.base_experience}</p>
          <p>Type: {pokemonDetails.types[0].type.name}</p>
          <p>Move: {pokemonDetails.moves[0].move.name}</p>
        </section>
      }
      </>
    )
  }
}
export default PokemonDetails;
