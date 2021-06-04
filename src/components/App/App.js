import React from 'react';
import './App.css';
import fetchPokemonData  from '../../apiData/apiCalls';
import Home from '../Home/Home';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import { Route, Switch } from 'react-router-dom';
import Caught from '../Caught/Caught';
import Login from '../Login/Login';
import Signup from '../Signup/Signup'
import { AuthProvider } from '../../context/AuthContext'
import PrivateRoute from '../PrivateRoute/PrivateRoute'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      error: '',
      caughtPokemon: [],
      isUser: false,
      isLoggedIn: false
    }
  }

  changeUser = () => {
    console.log('change');
    this.setState({isUser: !this.state.isUser})
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
    const { pokemons, error, caughtPokemon, isUser} = this.state
    return (
      <main>
        <AuthProvider>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute
              exact path="/"
              component={Home}
              pokemons={pokemons}
              caught={caughtPokemon} 
              favorite={this.catchPokemon} 
            />
            <PrivateRoute path='/caught' 
              component={Caught} 
              pokemons={pokemons} 
              caught={caughtPokemon} 
              favorite={this.catchPokemon} 
              />
              
            <PrivateRoute path="/:id"
              component={PokemonDetails}  
              caught={caughtPokemon} 
              favorite={this.catchPokemon} 
            />
          </Switch>
        </AuthProvider>
      </main>
    )

  }
}

export default App;
