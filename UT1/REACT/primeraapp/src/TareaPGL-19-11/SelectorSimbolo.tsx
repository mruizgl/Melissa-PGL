import React, { useState } from 'react'
import Dibujo from './Dibujo';

type Props = {
  modificarstatepadre: Function;
}

const SelectorSimbolo = (props: Props) => {
    let simbolos = [ " ", "╚", "╔", "╩", "╦", "╠", "═", "╬", "╣", "║", "╗", "╝" ];
    const [index, setindex] = useState(0);

    const handleClickUp = () =>{
      if (index < 11) {
        let aux = index;
        aux++;
        setindex(aux);
        console.log(index);
      }
      
    }

    const handleClickDown = () =>{
      if (index > 0) {
        let aux = index;
        aux--;
        setindex(aux);
        console.log(aux);
      }
    }

    function enviarSimbolo () {
      const {modificarstatepadre} = props;
      modificarstatepadre(simbolos.at(index));
    }

  return (
    <div>
      <h3>Tarea PGL 10-11</h3>
      <p>Seleccione la figura que desea</p>
      <div >
        {simbolos.at(index)}
      </div>
      <div>
        <button onClick={handleClickUp}>up</button>
        <button onClick={handleClickDown}>down</button>
      </div>
      
      <button onClick={enviarSimbolo}>Guardar figura</button>
      
     
    </div>
  )
}

export default SelectorSimbolo