import React, { useState, useRef } from 'react';

<<<<<<< HEAD
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
=======
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
>>>>>>> bd2dc117420b5f0bdca46a16cf09eb109861f2ec
  };

  return (
    <div>
<<<<<<< HEAD
      <button onClick={agregarAleatorio}>Aleatorio</button>
      <button onClick={mostrarNumeros}>Mostrar</button>
      <div>
        <h3>Números generados:</h3>
        <p>{numerosAleatorios.join(', ')}</p> 
=======
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
>>>>>>> bd2dc117420b5f0bdca46a16cf09eb109861f2ec
      </div>
    </div>
  );
};

export default Practica25;
