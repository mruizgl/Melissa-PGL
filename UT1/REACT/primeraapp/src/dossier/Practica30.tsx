import React, { useState } from 'react';

/**
 * Implementaremos el juego de acertar número secreto. Pero en esta ocasión,
 * habrá un input y un botón. Al pulsar el botón el programa evalúa la apuesta del input. NO se
 * usarán referencias. Se hará el uso de manejo de eventos para acceso al DOM
 * @returns 
 */
const Practica30: React.FC = () => {
    const [numeroSecreto] = useState<number>(Math.floor(Math.random() * 100) + 1); 
    const [mensaje, setMensaje] = useState<string>(''); 
  
    const evaluarApuesta = (event: React.MouseEvent<HTMLButtonElement>) => {
      const input = event.currentTarget.previousElementSibling as HTMLInputElement; 
      const apuesta = parseInt(input.value, 10); 
  
      if (apuesta === numeroSecreto) {
        setMensaje('¡Correcto! Has adivinado el número secreto.');
      } else if (apuesta < numeroSecreto) {
        setMensaje('Demasiado bajo. Intenta nuevamente.');
      } else if (apuesta > numeroSecreto) {
        setMensaje('Demasiado alto. Intenta nuevamente.');
      } else {
        setMensaje('Por favor, ingresa un número válido.');
      }
  
      input.value = '';
    };
  
    return (
      <div>
        <h5>Adivina el número secreto entre 1 y 100:</h5>
        <input type="number" min="1" max="100" />
        <button onClick={evaluarApuesta}>Adivinar</button>
        <p>{mensaje}</p>
      </div>
    );
};

export default Practica30;
