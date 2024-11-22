import React, { useState, useEffect, useRef } from 'react';

const Memorize = () => {
  // Estado para almacenar el número secreto
  const [numeroSecreto, setNumeroSecreto] = useState<number | null>(null);
  // Estado para almacenar el mensaje de resultado (si acertó, mayor o menor)
  const [mensaje, setMensaje] = useState<string>('');
  // useRef para manejar el valor del input
  const inputRef = useRef<HTMLInputElement>(null);

  // Generar número secreto cuando el componente se monta
  useEffect(() => {
    const numeroAleatorio = Math.floor(Math.random() * 10); // Número entre 0 y 9
    setNumeroSecreto(numeroAleatorio);
  }, []);

  // Función que se ejecuta al hacer la apuesta
  const apostar = () => {
    if (numeroSecreto !== null && inputRef.current) {
      const numeroApostado = parseInt(inputRef.current.value, 10);

      if (isNaN(numeroApostado)) {
        setMensaje('Por favor, introduce un número válido.');
        return;
      }

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
        {/* Input controlado mediante useRef */}
        <input ref={inputRef} type="number" placeholder="Introduce tu número" />
        <button onClick={apostar}>Apostar</button>
      </div>
    </div>
  );
};

export default Memorize;