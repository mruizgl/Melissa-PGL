import React, { ChangeEvent, useState } from 'react'

type Props = {}

const Practica28 = (props: Props) => {
  const [texto, setTexto] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault(); 
    setTexto(event.currentTarget.value); 
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange} 
      />
      <h5>{texto}</h5> 
    </div>
  );
}

export default Practica28