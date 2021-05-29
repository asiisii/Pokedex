import React from 'react'
import './App.css';
import apiCalls from '../../apiData/apiCalls'
import Home from '../Home/Home'

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
        <Home pokemons={pokemons} />
      </main>
    )

  }
}

export default App;
