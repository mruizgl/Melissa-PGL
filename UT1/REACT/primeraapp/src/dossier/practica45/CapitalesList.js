import React from 'react';
import { Link } from 'react-router-dom';

export default function CapitalesList() {
  const capitales = [
    { id: 1, nombre: 'Madrid' },
    { id: 2, nombre: 'Barcelona' },
  ];

  return (
    <div>
      <h2>Lista de Capitales</h2>
      <ul>
        {capitales.map((capital) => (
          <li key={capital.id}>
            <Link to={`/capital/${capital.id}`}>{capital.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
