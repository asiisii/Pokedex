import React from 'react';
import './App.css';
import fetchPokemonData  from '../../apiData/apiCalls';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Caught from '../Caught/Caught';
import Login from '../Login/Login';

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
      const pokemonIndex = this.state.caughtPokemon.indexOf(pokemonName)
      this.state.caughtPokemon.splice(pokemonIndex, 1)
    }
    this.forceUpdate();
  }

  render() {
    const { pokemons, error, caughtPokemon} = this.state
    return (
      <main>
        <Navbar />
        <Switch>
        <Route path="/login" component={Login}>
        <Route
        exact path="/"
        render={() => error
          ? <h2>{error}</h2>
          : <Home pokemons={pokemons} caught={caughtPokemon} favorite={this.catchPokemon} />}
        />
        <Route path='/caught' render={() => error
          ? <h2>{error}</h2>
          : <Caught pokemons={pokemons} caught={caughtPokemon} favorite={this.catchPokemon} />}
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
