import { useEffect, useState } from 'react';
import { fetchPokemonTypes } from '../services/api';

const TypeFilter = ({ selectedType, setSelectedType }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    fetchPokemonTypes().then(setTypes);
  }, []);

  return (
    <select className="filter-bar" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
      <option value="">All Types</option>
      {types.map((type) => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
};

export default TypeFilter;
