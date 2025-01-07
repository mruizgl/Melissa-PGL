import React from 'react'

type Props = {}

type MovieType = {
    id: number;
    titulo: string;
    direccion: string;
    actores: string;
    argumento: string;
    imagen: string;
}

const url = `http://localhost:3000/`;

const findMovieFromApi = async () => {
    const response = await fetch(`${url}peliculas`);
    const movieData = await response.json();
    return movieData as MovieType;
}

const FindMovie = (props: Props) => {
  return (
    <div>FindMovie</div>
  )
}