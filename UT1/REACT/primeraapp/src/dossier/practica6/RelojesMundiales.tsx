import React from 'react';
import { Reloj } from './Reloj';

type Props = {};

export const RelojesMundiales = (props: Props) => {
  const zonas = [
    "Europe/Madrid",
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
  ];

  return (
    <div className="container">
      <h1>Actividad React: Relojes Mundiales</h1>
      <div className="relojes-container">
        {zonas.map((zona, index) => (
          <Reloj key={index} zona={zona} />
        ))}
      </div>
    </div>
  );
};

export default RelojesMundiales;