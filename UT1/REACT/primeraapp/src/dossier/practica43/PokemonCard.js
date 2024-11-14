import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(url);
        setPokemon(response.data); 
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [url]);

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="pokemon-card">
      <h3>{pokemon.name}</h3>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Weight: {pokemon.weight} kg</p>
      <p>Height: {pokemon.height / 10} m</p>
    </div>
  );
};

export default PokemonCard;
