import React, { useState, useRef } from 'react';

const Practica25 = () => {
  const [numerosAleatorios, setNumerosAleatorios] = useState<number[]>([]);
  const numerosRef = useRef<number[]>([]); 

  const agregarAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    numerosRef.current.push(numeroAleatorio); 
    console.log('Números en la referencia:', numerosRef.current); 
  };

  const mostrarNumeros = () => {
    setNumerosAleatorios([...numerosRef.current]);
  };

  return (
    <div>
      <button onClick={agregarAleatorio}>Aleatorio</button>
      <button onClick={mostrarNumeros}>Mostrar</button>
      <div>
        <h3>Números generados:</h3>
        <p>{numerosAleatorios.join(', ')}</p> 
      </div>
    </div>
  );
};

export default Practica25;
