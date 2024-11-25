import React, { useState } from 'react'
import SelectorSimbolo from './SelectorSimbolo';


const Dibujo = () => {

    const [simbolo, setsimbolo] = useState<String>("")

    function modificarSimbolo (simboloentrante: string) {
        setsimbolo(simboloentrante);
    }
  return (
    <div>
        <SelectorSimbolo modificarstatepadre={modificarSimbolo}/>
        <div>
            recibido:
            {simbolo}
        </div>
    </div>
  )
}

export default Dibujo;