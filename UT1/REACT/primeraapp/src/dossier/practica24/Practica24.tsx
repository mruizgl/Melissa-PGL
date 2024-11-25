import React, { useState, useEffect, useRef } from 'react';

const Practica24 = () => {
  // Estado para almacenar el número secreto
  const [numeroSecreto, setNumeroSecreto] = useState<number | null>(null);
  // Estado para almacenar el mensaje de resultado (si acertó, mayor o menor)
  const [mensaje, setMensaje] = useState<string>('');
  // Referencia para capturar el valor del input
  const inputRef = useRef<HTMLInputElement>(null);

  const generarNuevoNumeroSecreto = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10); // Número entre 0 y 9
    setNumeroSecreto(numeroAleatorio);
    setMensaje('');
    if (inputRef.current) {
      inputRef.current.value = ''; // Limpiar el input
    }
  };


  // Función que se ejecuta cuando el usuario hace una apuesta
  const apostar = () => {
    const valorInput = inputRef.current?.value;
    if (valorInput && numeroSecreto !== null) {
      const numeroApostado = parseInt(valorInput, 10); 
      if (numeroApostado === numeroSecreto) {
        setMensaje('¡Felicidades, acertaste!');
      } else if (numeroApostado < numeroSecreto) {
        setMensaje('El número secreto es mayor. ¡Inténtalo de nuevo!');
      } else {
        setMensaje('El número secreto es menor. ¡Inténtalo de nuevo!');
      }
    }
  };

  return (
    <div>
      <h2>Juego de Acertar el Número Secreto</h2>
      <p>{mensaje}</p>
      <div>
        <input
          type="number"
          ref={inputRef} 
          placeholder="Ingresa un número"
        />
        <button onClick={apostar}>Apostar</button>
      </div>
       <button onClick={generarNuevoNumeroSecreto} style={{ marginTop: '10px' }}>
        Reiniciar Juego
      </button>
    </div>
  );
};

export default Practica24;
