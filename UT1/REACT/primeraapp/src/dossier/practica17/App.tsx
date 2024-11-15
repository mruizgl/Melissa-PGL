import React, { useState } from 'react'
import Saludo from './Saludo';
import NumerosAleatorios from './NumerosAleatorios';

type Props = {}

const App = () => {

    const [mostrarNumeros, setMostrarNumeros] = useState<boolean>(true);
    const fechaActual = new Date().toLocaleString();
  
    return (
      <div>
        <button onClick={() => setMostrarNumeros(true)}>Generar Números</button>
        <button onClick={() => setMostrarNumeros(false)}>Mostrar Saludo</button>
  
        {/* Condicional para renderizar uno u otro componente */}
        {mostrarNumeros ? (
          <NumerosAleatorios />
        ) : (
          <Saludo fecha={fechaActual} />
        )}
      </div>
    );
  };
  
  export default App;