import { useEffect, useState } from 'react';
import { fetchPokemonData } from './services/api';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import TypeFilter from './components/TypeFilter';
import PokemonList from './components/PokemonList';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemonData();
        setPokemonList(data);
        setFilteredList(data);
        setLoading(false);
      } catch (e) {
        setError('Error fetching Pokémon data.');
        setLoading(false);
      }
    };
    loadData();
  }, []);


  useEffect(() => {
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType ? pokemon.types.some(t => t.type.name === selectedType) : true)
    );
    setFilteredList(filtered);
  }, [searchTerm, selectedType, pokemonList]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    
    <div>
      <div className="container">
      <Header />
      <div className="filters">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TypeFilter selectedType={selectedType} setSelectedType={setSelectedType} />
      </div>
      <PokemonList pokemonList={filteredList} />
    </div>
    <Footer /> 
    </div>
  );
}

export default App;
