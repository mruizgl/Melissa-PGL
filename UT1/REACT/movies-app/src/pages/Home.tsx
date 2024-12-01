import React, { useEffect, useContext } from 'react';
import { MoviesContext } from '../context/MovieContext';
import { Movie } from '../models/Movie';

const Home: React.FC = () => {
  const moviesCtx = useContext(MoviesContext);

  useEffect(() => {
    if (!moviesCtx) return; 

    fetch('http://localhost:3001/peliculas')
      .then((res) => res.json())
      .then((data: Movie[]) => moviesCtx.setMovies(data))
      .catch((error) => console.error('Error al cargar películas:', error));
  }, [moviesCtx]);


  if (!moviesCtx) {
    return <p>Error: MoviesContext no está disponible.</p>;
  }

  const { movies } = moviesCtx;

  return (
    <div>
      <h1>Películas</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
