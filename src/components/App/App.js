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
      pokemonCaught: []
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

  catchPokemon = () => {
    // !caught ? this.setState({caught: true} : this.setState({caught: false}))
    if (!this.state.caught) {
      this.setState({caught: true});
      // return caughtBall;
    } else {
      this.setState({caught: false});
      // return uncaughtBall;
    }
  }

  render() {
    const { pokemons, error, caught} = this.state
    return (
      <main>
        <Switch>
        <Route
        exact path="/"
        render={() => error
          ? <h2>{error}</h2>
          : <Home pokemons={pokemons} catch={this.catchPokemon} caught={caught} />}
        />
        <Route
        path="/:id"
        render={({match}) => {
          const id = match.params.id;
          return <PokemonDetails id={id} catch={this.catchPokemon} caught={caught} />
        }}/>
        </Switch>
      </main>
    )

  }
}

export default App;
