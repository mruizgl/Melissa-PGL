import React from 'react';
import { usePokemonContext } from './PokemonContext';

const PokemonFavorite: React.FC = () => {
  const { favorito } = usePokemonContext();

  if (!favorito) {
    return <p>No hay un Pokémon favorito seleccionado.</p>;
  }

  return (
    <div style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
      <h3>Pokémon Favorito</h3>
      <p><strong>Nombre:</strong> {favorito.name}</p>
      <img src={favorito.image} alt={favorito.name} style={{ width: '100px' }} />
    </div>
  );
};

export default PokemonFavorite;
