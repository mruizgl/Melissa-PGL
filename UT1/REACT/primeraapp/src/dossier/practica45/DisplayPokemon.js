import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DisplayPokemon() {
  const { id } = useParams(); 
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };

    fetchPokemon();
  }, [id]); 

  return (
    <div>
      {pokemon ? (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Tipo: {pokemon.types.map(type => type.type.name).join(', ')}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
