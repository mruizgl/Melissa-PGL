import React, { useState, useEffect } from 'react';

const Memorize = () => {
    // Estado para almacenar el número secreto
    const [numeroSecreto, setNumeroSecreto] = useState<number | null>(null);
    // Estado para almacenar el mensaje de resultado (si acertó, mayor o menor)
    const [mensaje, setMensaje] = useState<string>('');
    
    // Se genera el número secreto cuando el componente se monta
    useEffect(() => {
      const numeroAleatorio = Math.floor(Math.random() * 10); // Número entre 0 y 9
      setNumeroSecreto(numeroAleatorio);
    }, []); // El efecto solo se ejecuta una vez al montar el componente
  
    // Función que se ejecuta cuando el usuario hace una apuesta
    const apostar = (numeroApostado: number) => {
      if (numeroSecreto !== null) {
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

          {[...Array(10)].map((_, index) => (
            <button key={index} onClick={() => apostar(index)}>
              {index}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default Memorize;