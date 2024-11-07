import React, { useState } from 'react'

type Props = {}

const Practica9 = (props: Props) => {
  const [Contador, setContador] = useState(1)

  const manejarClick = () => {
    setContador(number => (number === 10 ? 1 : number + 1)) //incrementar contador pero si llea a 1 reiniciar a 1
  };
  return (
    <>
      <h2>Tabla del 2</h2>
      <button onClick={manejarClick}>
        <p>2 x {Contador} = {2 * Contador}</p>
      </button>
    </>
  )
}

export default Practica9