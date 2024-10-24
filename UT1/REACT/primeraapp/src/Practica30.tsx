import React, { useState } from 'react';

const Practica30: React.FC = () => {
    const [numeroSecreto] = useState<number>(Math.floor(Math.random() * 100) + 1); // Número secreto aleatorio entre 1 y 100
    const [mensaje, setMensaje] = useState<string>(''); // Mensaje para el usuario
  
    // Manejador de clic para evaluar la apuesta
    const evaluarApuesta = (event: React.MouseEvent<HTMLButtonElement>) => {
      const input = event.currentTarget.previousElementSibling as HTMLInputElement; // Accede al input anterior
      const apuesta = parseInt(input.value, 10); // Convierte el valor del input a un número
  
      if (apuesta === numeroSecreto) {
        setMensaje('¡Correcto! Has adivinado el número secreto.');
      } else if (apuesta < numeroSecreto) {
        setMensaje('Demasiado bajo. Intenta nuevamente.');
      } else if (apuesta > numeroSecreto) {
        setMensaje('Demasiado alto. Intenta nuevamente.');
      } else {
        setMensaje('Por favor, ingresa un número válido.');
      }
  
      input.value = ''; // Limpia el input después de evaluar
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
