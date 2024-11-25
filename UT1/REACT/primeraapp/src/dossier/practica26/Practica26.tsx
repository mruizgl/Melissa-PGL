import React, { useState, useRef } from 'react';
import ContarLetras from './ContarLetras';
import TablaMultiplicar from './TablaMultiplicar';

type Props = {};

const Practica26 = ({}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null); // Referencia para el input
  const [opcion, setOpcion] = useState<boolean>(true); // Controla qué componente renderizar
  const [valor, setValor] = useState<string>(''); // Almacena el valor introducido

  const manejarSubmit = () => {
    const input = inputRef.current?.value || ''; // Obtiene el valor del input
    setValor(input);

    // Determina si es un número o una palabra
    if (isNaN(parseInt(input))) {
      setOpcion(true); // Es una palabra
    } else {
      setOpcion(false); // Es un número
    }
  };

  return (
    <div>
      <h2>Práctica 26</h2>
      <div>
        <input type="text" placeholder="Introduce un número o una palabra" ref={inputRef} />
        <button onClick={manejarSubmit}>Enviar</button>
      </div>
      <div>
        {opcion ? (
          <ContarLetras palabra={valor} />
        ) : (
          <TablaMultiplicar numero={parseInt(valor)} />
        )}
      </div>
    </div>
  );
};

export default Practica26;
