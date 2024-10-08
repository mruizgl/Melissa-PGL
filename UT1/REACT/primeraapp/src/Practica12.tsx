import React, { useState } from 'react'

type Props = {}

const Practica12 = (props: Props) => {
  const [color, setColor] = useState("")
  function elegirColor(color: string) {
    setColor(color)
    
  }
  return (
    <>
    <h3>Elige color:{color}</h3>
    <p>Verde: <button onClick={()=>elegirColor("verde")}>has elegido verde </button></p>
    <p>Rojo: <button onClick={()=>elegirColor("rojo")}>has elegido rojo</button></p>
    </> 
    )
}

export default Practica12
