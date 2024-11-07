import React, { useState } from 'react'

type Props = {}

const Practica10 = (props: Props) => {
    const  [aleatorio, setaleatorio] = useState<Array<Number>>([]);

    const manejarClick = () => {
        setaleatorio([...aleatorio,Math.floor((Math.random() * 100)+1)]);
    };
  return (
    <div>Practica10
        <button onClick={manejarClick}>Generar número aleatorio</button>
        <p>Numero de aleatorios generado: {JSON.stringify(aleatorio)}</p>
    </div>
  )
}

export default Practica10