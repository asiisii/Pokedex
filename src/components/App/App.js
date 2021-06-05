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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')
  
  const catchPokemon = (pokemonName) => {
    console.log(pokemonName);
    if(!caughtPokemon.includes(pokemonName)) {
      setCaughtPokemon([...caughtPokemon, pokemonName])
      // caughtPokemon.push(pokemonName)
      console.log(caughtPokemon);
    } else {
      // const pokemonIndex = caughtPokemon.indexOf(pokemonName)
      // caughtPokemon.splice(pokemonIndex, 1)
      // console.log(caughtPokemon);
      // console.log(pokemonIndex);
     setCaughtPokemon(caughtPokemon.filter(poki => {
        return poki !== pokemonName
      }))
      console.log(caughtPokemon);
      // const a = setCaughtPokemon(a => {
      //   a.filter((caughtPokemon, i) => i !== pokemonIndex)
      // })
      // console.log(a);
      // return a
    }
    // if (!this.state.caughtPokemon.includes(pokemonName)) {
      //   this.state.caughtPokemon.push(pokemonName);
      // } else {
        //   const pokemonIndex = this.state.caughtPokemon.indexOf(pokemonName)
        //   this.state.caughtPokemon.splice(pokemonIndex, 1)
        // }
        // forceUpdate();
      }
      
    const fetchAllPokemonData = async () => {
      try {
        const fetchedPokemon = await fetchPokemonData('?limit=151')
        // this.setState({ pokemons: fetchedPokemon.results})
        setPokemons(fetchedPokemon.results)
        
      } catch (e) {
        // this.setState({error: 'Request failed'})
        setError('Request failed')
      }
    }

    useEffect(() => {
      fetchAllPokemonData()
    }, [])
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
