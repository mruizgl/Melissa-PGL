import React from 'react';
import { Reloj } from './Reloj';

type Props = {};

export const RelojesMundiales = (props: Props) => {
  return (
    <div>
      <h1>Actividad React: Relojes Mundiales</h1>
      <Reloj zona="Europe/Madrid" />
      <Reloj zona="America/New_York" />
      <Reloj zona="Europe/London" />
    </div>
  );
};

export default RelojesMundiales;