import React, { useEffect, useState } from 'react'

type Props = {}

const Practica31 = (props: Props) => {
    const [numeros, setNumeros] = useState<number[]>([]);
    const [mostrarNumeros, setMostrarNumeros] = useState<boolean>(true);
    const [intentoActual, setIntentoActual] = useState<number>(1);
    const [contador, setContador] = useState<number>(0);
  
    useEffect(() => {
      const numerosAleatorios = [1, 2, 3, 4, 5, 6, 7, 8];
      setNumeros(numerosAleatorios.sort(() => Math.random() - 0.5));
  
      const timer = setTimeout(() => {
        setMostrarNumeros(false);
      }, 3000);
  
      return () => clearTimeout(timer); 
    }, []);
  
    const manejarClick = (numero: number) => {
      if (numero === intentoActual) {
        setContador(contador + 1); 
        setIntentoActual(intentoActual + 1); 
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
                disabled={intentoActual > numero} 
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