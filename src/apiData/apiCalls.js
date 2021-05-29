
const baseURL = 'https://pokeapi.co/api/v2/'
const getAll = 'https://pokeapi.co/api/v2/pokemon?limit=151'
const singlePokemon = 'https://pokeapi.co/api/v2/pokemon/'
const soloPic = 'https://pokeres.bastionbot.org/images/pokemon/1.png'

const apiCalls = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  return await response.json()
}

const getIndividualPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  return await response.json()
}

export { apiCalls, getIndividualPokemon }
