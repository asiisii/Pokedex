import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext'
import fetchPokemonData  from '../../apiData/apiCalls';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Caught from '../Caught/Caught';
import Signup from '../Signup/Signup'
import Login from '../Login/Login';
import Home from '../Home/Home';
import './App.css';
// import useIsMounted from '../useIsMounted'

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const [caughtPokemon, setCaughtPokemon] = useState([])
  const [error, setError] = useState('')
  // const isMounted = useIsMounted();

  const catchPokemon = (pokemonName) => {
    if(!caughtPokemon.includes(pokemonName)) {
      setCaughtPokemon([...caughtPokemon, pokemonName])
    } else {
      setCaughtPokemon(caughtPokemon.filter(poki => {
        return poki !== pokemonName
      }))
    }
  }
      
  const fetchAllPokemonData = async () => {
    setError('')
    try {
      const fetchedPokemon = await fetchPokemonData('?limit=151')
      setPokemons(fetchedPokemon.results)
      // fetchPokemonData('?limit=151').then(data => {
      //   if (isMounted.current) {
      //     setPokemons(data.results)
      //   }
      // })
      // return fetchedPokemon ? setPokemons(fetchedPokemon.results) : null
    } catch (e) {
      setError('Request failed')
    }
   
  }

  useEffect(() => {
  //   let mounted = true
  // if (mounted) {
    fetchAllPokemonData() 
    // setError('')
    // fetchPokemonData('?limit=151').then(data => {
    //       if (isMounted.current) {
    //         setPokemons(data.results)
    //       }
    //     })
    // try {
    //   // const fetchedPokemon = await fetchPokemonData('?limit=151')
    //   fetchPokemonData('?limit=151').then(data => {
    //     if (isMounted.current) {
    //       setPokemons(data.results)
    //     }
    //   })
    //   // return fetchedPokemon ? setPokemons(fetchedPokemon.results) : null
    // } catch (e) {
    //   setError('Request failed')
    // }
  // }
  //  return () => {
  //   mounted = false
  // }
  //  const abortController = new AbortController()
  //  return (() => abortController.abort())
    
  }, [pokemons])

  return (
    <main>
      <AuthProvider>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
 
          <PrivateRoute
            exact path="/"
            component={Home}
            pokemons={pokemons}
            caught={caughtPokemon} 
            favorite={catchPokemon} 
            error={error}
          />
        
          <PrivateRoute path='/caught' 
            component={Caught} 
            pokemons={pokemons} 
            caught={caughtPokemon} 
            favorite={catchPokemon} 
            error={error}
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
