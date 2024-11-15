import React, { useState, useEffect } from 'react';

interface Props {
  zona: string;
}

export const Reloj = ({ zona }: Props): React.ReactElement => {
  const zonaString = zona ?? "Europe/Madrid"; 
  const [fecha, setFecha] = useState<string>(new Date().toLocaleString("es-ES", { timeZone: zonaString }));

  useEffect(() => {
    const interval = setInterval(() => {
      setFecha(new Date().toLocaleString("es-ES", { timeZone: zonaString }));
    }, 1000);

    return () => clearInterval(interval);
  }, [zonaString]);

  return (
    <div>
      <h2>Hora en {zonaString}:</h2>
      <p>{fecha}</p>
    </div>
  );
};

