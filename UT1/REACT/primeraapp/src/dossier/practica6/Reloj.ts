import React from 'react';

type Props = {
  zona?: string; 
};

export const Reloj = ({ zona }: Props): React.ReactElement => {
  const zonaString = zona ?? "Europe/Madrid"; 
  const fecha = new Date().toLocaleString("es-ES", { timeZone: zonaString }); // Obtiene la fecha en la zona horaria especificada


  return React.createElement(
    'div',
    null,
    React.createElement('h2', null, `Hora en ${zonaString}:`),
    React.createElement('p', null, fecha)
  );
};

