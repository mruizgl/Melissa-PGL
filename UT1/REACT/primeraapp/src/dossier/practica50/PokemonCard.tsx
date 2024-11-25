import React from 'react';
import { usePokemonContext } from './PokemonContext';

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    image: string;
    [key: string]: any; 
  };
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const { establecerFavorito } = usePokemonContext();

  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h4>{pokemon.name}</h4>
      <img src={pokemon.image} alt={pokemon.name} style={{ width: '100px' }} />
      <button onClick={() => establecerFavorito(pokemon)}>Establecer Favorito</button>
    </div>
  );
};

export default PokemonCard;
