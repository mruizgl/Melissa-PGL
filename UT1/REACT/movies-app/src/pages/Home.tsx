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
          <li key={movie.id} style={{ marginBottom: '20px', listStyle: 'none' }}>
            <h2>{movie.titulo}</h2>
            <img
            src={`http://localhost:3001/${movie.imagen}`}
            alt={movie.titulo}
            style={{ width: '200px', borderRadius: '8px' }}
            />
            <p><strong>Dirección:</strong> {movie.direccion}</p>
            <p><strong>Actores:</strong> {movie.actores}</p>
            <p><strong>Argumento:</strong> {movie.argumento}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
