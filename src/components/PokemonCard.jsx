const PokemonCard = ({ pokemon }) => (
    <div className="pokemon-card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>ID: #{pokemon.id}</p>
      <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
    </div>
  );
  
  export default PokemonCard;
  