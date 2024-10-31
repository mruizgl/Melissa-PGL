import React, { useState } from 'react';


const EjStateByProps = () => {
  const [message, setMessage] = useState(""); 

  const modificaPadre= ( dato: any)=>{
    setMessage(""+dato);
  }

  return (
    <div>
      <h2>{message}</h2>
      <ComponenteA modificarPadre={modificaPadre} />
      <ComponenteB modificarPadre={modificaPadre} />
    </div>
  );
};

export default EjStateByProps;



type Props = {
    modificarPadre: Function
}

const ComponenteA = (props: Props) => {
  return (
    <div>
        <h2>ComponenteA</h2>
        <div>
            MI padre dice {props.modificarPadre}
        </div>
    </div>
  )
}


const ComponenteB = (props: Props) => {
    return (
    <div>
        <h2>ComponenteB</h2>
        <button onClick={() => props.modificarPadre("pulsando boton en B")}>Cambiar</button>
    </div>
    )
  }
  