import React, { createContext, useContext, useState } from 'react';

interface Pokemon {
  id: number;
  name: string;
  image: string;
  [key: string]: any;
}

interface PokemonContextType {
  favorito: Pokemon | null;
  establecerFavorito: (pokemon: Pokemon) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorito, setFavorito] = useState<Pokemon | null>(null);

  const establecerFavorito = (pokemon: Pokemon) => {
    setFavorito(pokemon);
  };

  return (
    <PokemonContext.Provider value={{ favorito, establecerFavorito }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemonContext debe usarse dentro de un PokemonProvider');
  }
  return context;
};
