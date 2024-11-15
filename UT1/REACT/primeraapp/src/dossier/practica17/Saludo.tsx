import React from 'react'

type Props = {
    fecha: string;
}

const Saludo = ({ fecha }: Props) => {

  return (
    <div>
      <h2>¡Hola! Aquí está la fecha actual:</h2>
      <p>{fecha}</p>
    </div>
  )
}

export default Saludo