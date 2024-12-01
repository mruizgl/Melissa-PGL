import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Movie } from '../models/Movie';

interface MoviesContextProps {
  movies: Movie[];
  favorites: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: string) => void;
}

export const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const useMovies = (): MoviesContextProps => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const MoviesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addFavorite = (movie: Movie) => {
    if (!favorites.some((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <MoviesContext.Provider value={{ movies, setMovies, favorites, addFavorite, removeFavorite }}>
      {children}
    </MoviesContext.Provider>
  );
};
