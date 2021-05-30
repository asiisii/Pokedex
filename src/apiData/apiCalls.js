const baseURL = 'https://pokeapi.co/api/v2/pokemon'

const fetchPokemonData = async (query) => {
  const response = await fetch(`${baseURL}${query}`)
  return await response.json()
}

export default fetchPokemonData 
