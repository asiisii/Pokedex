import React from 'react';
import './App.css';
import apiCalls from '../../apiData/apiCalls';
import Home from '../Home/Home';
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
      const fetchedPokemon = await apiCalls()
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
        <Route exact path="/" render={() => error ? <h2>{error}</h2> : <Home pokemons={pokemons} />} />
        </Switch>
      </main>
    )

  }
}

export default App;
