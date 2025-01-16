export interface Pokemon {
    name: string;
    url: string;
  }
  
  export interface PokemonDetails {
    name: string;
    sprites: Record<string, string>;
  }
  
  export const fetchPokemonList = async (limit: number = 100): Promise<Pokemon[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await response.json();
    return data.results;  
  };
  
  export const fetchPokemonDetails = async (url: string): Promise<PokemonDetails> => {
    const response = await fetch(url);
    const data = await response.json();
    return {
      name: data.name,
      sprites: data.sprites,
    };  
  };