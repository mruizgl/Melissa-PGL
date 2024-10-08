import React, { useState } from 'react'

type Props = {}

const Practica12 = (props: Props) => {
  const [color, setColor] = useState("")
  function elegirColor(color: string) {
    setColor(color)
    
  }
  return (
    <>
    <h3>Elige color:</h3>
    <p>Has elegido {color}</p>
    <button onClick={()=>elegirColor("verde")}>Verde </button>
    <button onClick={()=>elegirColor("rojo")}>Rojo</button>
    </> 
    )
}

export default Practica12
