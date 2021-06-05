import React, { useState, useEffect } from 'react'
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


const App = () => {
  // constructor() {
  //   super()
  //   this.state = {
  //     pokemons: [],
  //     error: '',
  //     caughtPokemon: [],
  //     isUser: false,
  //     isLoggedIn: false
  //   }
  // }
  const [pokemons, setPokemons] = useState([])
  const [caughtPokemon, setCaughtPokemon] = useState([])
  const [isUser, setIsUser] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')

  const changeUser = () => {
    console.log('change');
    // this.setState({isUser: !this.state.isUser})
    setIsUser(!isUser)
  }

    // const { pokemons, error, caughtPokemon, isUser} = this.state
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
              favorite={catchPokemon} 
            />
            <PrivateRoute path='/caught' 
              component={Caught} 
              pokemons={pokemons} 
              caught={caughtPokemon} 
              favorite={catchPokemon} 
              />
              
            <PrivateRoute path="/:id"
              component={PokemonDetails}  
              caught={caughtPokemon} 
              favorite={catchPokemon} 
            />
          </Switch>
        </AuthProvider>
      </main>
    )
}

export default App;
