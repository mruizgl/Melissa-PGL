import React from 'react';

// Definimos el tipo de las props que recibirá el componente
type Props = {
  num1: number; // num1 es obligatorio y debe ser un número
  num2: number; // num2 es obligatorio y debe ser un número
};

const ComponenteTS = (props: Props) => {
  // Realizamos la suma de num1 y num2
  return (
    <div>
      La suma de num1 y num2 es: {props.num1 + props.num2}
    </div>
  );
};

export default ComponenteTS;