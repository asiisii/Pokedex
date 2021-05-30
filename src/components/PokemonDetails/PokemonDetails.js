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
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedPokemonDetails = await fetchPokemonData(`/${this.state.id}`)
      this.setState({ pokemonDetails: getPokemonDetails(fetchedPokemonDetails)})
    } catch (e) {
      this.setState({error: 'Request failed'})
    }
  }

  render() {
    const { pokemonDetails, id } = this.state;
    return(
      <>
      {pokemonDetails &&
        <section className="pokemon-info">
          <div className="info-header">
            <Link to='/'>Go back</Link>
            <h1 className="pokemon-name" >{pokemonDetails.name}</h1>
            <button className="pokeball" onClick={() => {
              this.props.favorite(pokemonDetails.name);
              this.forceUpdate();
            }}>
              <img src={this.props.caught.includes(pokemonDetails.name) ? caughtBall : uncaughtBall} alt="pokeball"></img>
            </button>
          </div>
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
