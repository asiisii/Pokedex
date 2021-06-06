const baseURL = 'https://pokeapi.co/api/v2/pokemon'

const fetchPokemonData = async (query) => {
  const response = await fetch(`${baseURL}${query}`)
  return await response.json()
}

// const fetchPokemonData = (query) => {
//   return fetch(`${baseURL}${query}`)
//     .then(response => {
//       // console÷.log(response.json());
//       return response.json()
//     })
//     // .then(data => console.log(data.results))
// }
export default fetchPokemonData 

