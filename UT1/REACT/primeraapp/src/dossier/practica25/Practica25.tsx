import React, { useState, useRef } from 'react';

const Practica25: React.FC = () => {
  // Estado para almacenar el array que se muestra
  const [numeros, setNumeros] = useState<number[]>([]);
  // useRef para almacenar el array de números generados aleatoriamente
  const numerosRef = useRef<number[]>([]);

  // Función para generar un número aleatorio y agregarlo al array apuntado por useRef
  const agregarAleatorio = () => {
    const nuevoNumero = Math.floor(Math.random() * 100); // Número aleatorio entre 0 y 99
    numerosRef.current.push(nuevoNumero); // Agregar al array en la referencia
    console.log('Números en useRef:', numerosRef.current); // Para depuración
  };

  // Función para copiar el array de useRef al estado y mostrarlo
  const mostrarArray = () => {
    setNumeros([...numerosRef.current]); // Actualizar el estado con los valores de la referencia
  };

  return (
    <div>
      <h2>Práctica 25: Generar y Mostrar Números Aleatorios</h2>
      <button onClick={agregarAleatorio}>Aleatorio</button>
      <button onClick={mostrarArray}>Mostrar</button>
      <div>
        <h3>Números Generados:</h3>
        <ul>
          {numeros.map((numero, index) => (
            <li key={index}>{numero}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Practica25;
