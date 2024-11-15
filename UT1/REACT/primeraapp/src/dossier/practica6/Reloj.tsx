import React, { useState, useEffect } from 'react';

interface Props {
  zona?: string;
}

export const Reloj = (props: Props) => {
  const [fecha, setFecha] = useState<string>("");

  useEffect(() => {
    const timerID = setInterval(tick, 1000);
    return () => clearInterval(timerID); 
  }, []);

  const tick = () => {
    const zona = props.zona || "Europe/Madrid";
    const nuevaFecha = new Date().toLocaleString("es-ES", { timeZone: zona });
    setFecha(nuevaFecha);
  };

  return (
    <div>
      <h2>Hora en {props.zona || "Europe/Madrid"}:</h2>
      <p>{fecha}</p>
    </div>
  );
};


