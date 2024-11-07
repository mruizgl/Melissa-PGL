import React, { useState } from 'react'


const Practica11 = () => {
    const [horaactual, sethoraactual] = useState("");
    let dato = 1;

    function actualizar() {
        Practica11.atributoEstatico++;
        dato++;
        console.log("Estático: " + Practica11.atributoEstatico);
        console.log("dato: " + dato);
        sethoraactual("" + new Date());
    }

  return (
    <div>
        <h4>Componente con estático</h4>
        <p>Info en estático: {Practica11.atributoEstatico}</p>
        <button onClick={actualizar}>Actualizar</button>

    </div>
  )
}

Practica11.atributoEstatico = 2;

export default Practica11