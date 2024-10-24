import React, { useState } from 'react'

type Props = {}

const Practica29 = (props: Props) => {
    const [valor, setValor] = useState<number>(1); // Valor inicial

    // Manejador de clics
    const manejarOperacion = (operacion: string) => {
      setValor((prevValor) => {
        if (operacion === 'dividir') {
          return prevValor / 2; // Divide el valor actual entre 2
        } else if (operacion === 'multiplicar') {
          return prevValor * 2; // Multiplica el valor actual por 2
        }
        return prevValor; // Devuelve el valor anterior si no coincide con ninguna operación
      });
    };
  
    return (
      <div>
        <h5>Valor Actual: {valor}</h5>
        <button onClick={() => manejarOperacion('dividir')}>Dividir entre 2</button>
        <button onClick={() => manejarOperacion('multiplicar')}>Multiplicar por 2</button>
      </div>
    );
}

export default Practica29