// Fetch basic list + individual details
export const fetchPokemonData = async (limit = 150) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await res.json();
  
    // Fetch detailed data for each Pokemon
    const detailedData = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return await res.json();
      })
    );
  
    return detailedData;
  };
  
  // Fetch available Pokémon types
  export const fetchPokemonTypes = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/type`);
    const data = await res.json();
    return data.results.map(type => type.name);  // Return an array of type names
  };
  