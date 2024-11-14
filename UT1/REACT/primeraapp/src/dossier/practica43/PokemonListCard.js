import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const PokemonListCard = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList(); 
  }, []);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
};

export default PokemonListCard;
