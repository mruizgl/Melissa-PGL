import React, { useEffect, useState } from 'react';

type Props = {};

const EjemploUseEffect = (props: Props) => {
  const [contador, setContador] = useState<number>(100);

  useEffect(() => {
    const efecto = () => {
      let fecha = new Date();
      console.log(fecha);
      setContador(-1); 
    };
    efecto();
  },  [] );

  return (
    <div>
      <h3>info en state: {contador}</h3>
      <button onClick={() => setContador(contador + 1)}>Actualizar state</button>
    </div>
  );
};

export default EjemploUseEffect;
