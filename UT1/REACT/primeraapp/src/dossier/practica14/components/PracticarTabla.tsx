import React, { useState } from 'react'

interface Props {
  tabla: number;  
}

const PracticarTabla: React.FC<Props> = ({ tabla }) => {
  const [contador, setContador] = useState(1);

  const manejarClick = () => {
    setContador(prevContador => (prevContador === 10 ? 1 : prevContador + 1));
  };

  return (
    <div>
      <h2>Tabla del {tabla}</h2>
      <button onClick={manejarClick}>
        <p>{tabla} x {contador} = {tabla * contador}</p>
      </button>
    </div>
  );
};

export default PracticarTabla;