import PokemonCard from './PokemonCard';

const PokemonList = ({ pokemonList }) => {
  if (!pokemonList.length) return <p>No Pokemon found.</p>;

  return (
    <div className="pokemon-grid">
      {pokemonList.map(pokemon => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
