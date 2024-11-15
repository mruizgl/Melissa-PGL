import React, { useState } from 'react'
import './practica15.css';

const Practica15 = () => {

    const [claseaplicada, setClaseAplicada] = useState("");

  return (
    <div>
        <h2>Botones y css</h2>
        <h4 className={claseaplicada}>Este area muestra los resultados de los botones</h4>
        <div>
            <button onClick={() => setClaseAplicada("verde")}>verde</button>
            <button onClick={() => setClaseAplicada("azul")}>azul</button>
            <button onClick={() => setClaseAplicada("rojo")}>rojo</button>
            <button onClick={() => setClaseAplicada("rosa")}>rosa</button> 
        </div>
        
    </div>
  )
}

export default Practica15;