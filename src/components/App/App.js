import React from 'react';
import './App.css';
import fetchPokemonData  from '../../apiData/apiCalls';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { Route, Switch } from 'react-router-dom';
import uncaughtBall from '../../Assets/uncaughtBall.png';
import caughtBall from  '../../Assets/caughtBall.png';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      error: '',
      caughtPokemon: []
    }
  }

  componentDidMount = async () => {
    try {
      const fetchedPokemon = await fetchPokemonData('?limit=151')
      this.setState({ pokemons: fetchedPokemon.results})
    } catch (e) {
      this.setState({error: 'Request failed'})
    }
  }

  catchPokemon = (pokemonName) => {
    if (!this.state.caughtPokemon.includes(pokemonName)) {
      this.state.caughtPokemon.push(pokemonName);
    } else {
      const pokemonIndex = this.state.caughtPokemon.findIndex(critter => critter.name === pokemonName);
      this.state.caughtPokemon.splice(pokemonIndex, 1);
    }
  }

  // catchPokemon = () => {
  //   // !caught ? this.setState({caught: true} : this.setState({caught: false}))
  //   if (!this.state.caught) {
  //     this.setState({caught: true});
  //     // return caughtBall;
  //   } else {
  //     this.setState({caught: false});
  //     // return uncaughtBall;
  //   }
  // }

  render() {
    const { pokemons, error, caughtPokemon} = this.state
    return (
      <main>
        <Switch>
        <Route
        exact path="/"
        render={() => error
          ? <h2>{error}</h2>
          : <Home pokemons={pokemons} />}
        />
        <Route
        path="/:id"
        render={({match}) => {
          const id = match.params.id;
          return <PokemonDetails id={id} caught={caughtPokemon} favorite={this.catchPokemon} />
        }}/>
        </Switch>
      </main>
    )

  }
}

export default App;
