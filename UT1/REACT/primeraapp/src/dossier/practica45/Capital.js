import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Capital() {
  const { id } = useParams();
  const [capital, setCapital] = useState(null);

  useEffect(() => {
    const fetchCapital = async () => {
      const response = await fetch(`http://localhost:3001/capitales/${id}`);
      const data = await response.json();
      setCapital(data);
    };

    fetchCapital();
  }, [id]); 

  return (
    <div>
      {capital ? (
        <div>
          <h2>{capital.nombre}</h2>
          <img src={capital.imagen} alt={capital.nombre} />
          <p>Población: {capital.poblacion}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}
