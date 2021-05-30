import React from 'react';
import './App.css';
import fetchPokemonData  from '../../apiData/apiCalls';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      error: ''
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

  render() {
    const { pokemons, error} = this.state
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
          return <PokemonDetails id={id} />
        }}/>
        </Switch>
      </main>
    )

  }
}

export default App;
