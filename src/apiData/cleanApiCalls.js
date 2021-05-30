const getPokemonDetails = (data) => {
  const { abilities, height, name, moves, types, weight } = data
  console.log(data);
  const capitalName = name.charAt(0).toUpperCase() + name.slice(1)
  const typesInfo = types.map(type => type.type.name)
  console.log(typesInfo);
  return {
    name: capitalName,
    height: height,
    weight: weight,
  }
}


export default getPokemonDetails