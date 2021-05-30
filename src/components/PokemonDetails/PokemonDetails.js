import React, { Component } from 'react';
import { getIndividualPokemon } from '../../apiData/apiCalls';
import getPokemonDetails from '../../apiData/cleanApiCalls';
import './PokemonDetails.css';

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
      this.setState({ pokemonDetails: getPokemonDetails(fetchedPokemonDetails)})
    } catch (e) {
      this.setState({error: 'Request failed'})
    }
  }

  render() {
    const { pokemonDetails, id } = this.state
    return(
      <>
      {pokemonDetails &&
        <section>
          <h1>{pokemonDetails.name}</h1>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={pokemonDetails.name} />
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
