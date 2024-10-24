import React, { useState } from 'react'

type Props = {}

/**
 * Realizar un componente llamado:
 * OperarBotones que al pulsar el botón de la izquierda
 * divida al valor actual entre 2 y si se pulsa el de la derecha
 * multiplique. Se debe hacer mediante un único método que responda a onClick ( el mismo
 * método para los dos botones )
 * @param props 
 * @returns 
 */
const Practica29 = (props: Props) => {
    const [valor, setValor] = useState<number>(1); 

    const OperarBotones = (operacion: string) => {
      setValor((prevValor) => {
        if (operacion === 'dividir') {
          return prevValor / 2; 
        } else if (operacion === 'multiplicar') {
          return prevValor * 2; 
        }
        return prevValor; 
      });
    };
  
    return (
      <div>
        <h5>Valor Actual: {valor}</h5>
        <button onClick={() => OperarBotones('dividir')}>{valor} / 2</button>
        <button onClick={() => OperarBotones('multiplicar')}>{valor} * 2</button>
      </div>
    );
}

export default Practica29