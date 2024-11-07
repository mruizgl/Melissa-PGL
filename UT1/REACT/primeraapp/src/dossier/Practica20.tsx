import React, { useState } from 'react'

type Props = {}

const Practica20 = (props: Props) => {
  const [setsecreto, setSecreto] = useState(0);

  return (
    <>
    <input type="text" />
    <button type="button">Generar número secreto</button>
    </>
  )
}

export default Practica20