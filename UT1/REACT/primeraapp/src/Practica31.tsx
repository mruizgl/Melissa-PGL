import React, { useEffect, useState } from 'react'

type Props = {}

const Practica31 = (props: Props) => {
    const [numeros, setNumeros] = useState<number[]>([]);
    const [mostrarNumeros, setMostrarNumeros] = useState<boolean>(true);
    const [intentoActual, setIntentoActual] = useState<number>(1);
    const [contador, setContador] = useState<number>(0);
  
    useEffect(() => {
      // Generar 8 números aleatorios del 1 al 8
      const numerosAleatorios = Array.from({ length: 8 }, (_, i) => i + 1);
      setNumeros(numerosAleatorios.sort(() => Math.random() - 0.5));
  
      // Ocultar los números después de 3 segundos
      const timer = setTimeout(() => {
        setMostrarNumeros(false);
      }, 3000);
  
      return () => clearTimeout(timer); // Limpiar el timer al desmontar
    }, []);
  
    const manejarClick = (numero: number) => {
      if (numero === intentoActual) {
        setContador(contador + 1); // Incrementar contador
        setIntentoActual(intentoActual + 1); // Pasar al siguiente número
      }
    };
  
    return (
      <div>
        <h2>Juego de Memoria - Adivina los Números</h2>
        {mostrarNumeros ? (
          <div>
            {numeros.map((numero) => (
              <span key={numero} style={{ margin: '5px', fontSize: '24px' }}>
                {numero}
              </span>
            ))}
          </div>
        ) : (
          <div>
            {numeros.map((numero) => (
              <button
                key={numero}
                onClick={() => manejarClick(numero)}
                style={{
                  padding: '10px',
                  margin: '5px',
                  fontSize: '18px',
                  backgroundColor: intentoActual > numero ? '#cfe2ff' : '#fff',
                  border: '1px solid #000',
                }}
                disabled={intentoActual > numero} // Desactivar botón si el número ya fue adivinado
              >
                {intentoActual > numero ? numero : '?'}
              </button>
            ))}
          </div>
        )}
        <h4>Contador de Aciertos: {contador}</h4>
        <h4>Siguiente Número a Adivinar: {intentoActual}</h4>
      </div>
    );
}

export default Practica31