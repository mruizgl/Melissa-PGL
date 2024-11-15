import React, { useState } from 'react'

type Props = {}

const NúmerosAleatorios = () => {
    const [numeros, setNumeros] = useState<number[]>([]);
  
    const generarNumeros = () => {
      const nuevosNumeros = Array.from({ length: 10 }, () => Math.floor(Math.random() * 101));
      setNumeros(nuevosNumeros);
    };
  
    return (
      <div>
        <button onClick={generarNumeros}>Generar</button>
        <ul>
          {numeros.map((numero, index) => (
            <li key={index}>{numero}</li>
          ))}
        </ul>
      </div>
    );
  };

  export default NúmerosAleatorios;