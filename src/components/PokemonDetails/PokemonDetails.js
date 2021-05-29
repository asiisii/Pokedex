import React, { Component } from 'react';
import { getIndividualPokemon } from '../../apiData/apiCalls';
import './PokemonDetails.css';

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonDetails: [],
      id: props.id
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedPokemonDetails = await getIndividualPokemon(this.state.id)
      this.setState({ pokemonDetails: fetchedPokemonDetails})
    } catch (e) {
      this.setState({error: 'Request failed'})
    }
  }

  render() {
    console.log(this.state.pokemonDetails)
    return(
    <h1>PokemonDetails</h1>
    )
  }
}
export default PokemonDetails;
