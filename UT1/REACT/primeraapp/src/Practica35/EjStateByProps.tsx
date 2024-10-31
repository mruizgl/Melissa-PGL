import React, { useState } from "react";

// Componente A
const A: React.FC<{ message: string; onInputChange: (newMessage: string) => void }> = ({ message, onInputChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  return (
    <div style={{ backgroundColor: "blue", padding: "10px", color: "white" }}>
      <h4>Componente A</h4>
      <input type="text" value={message} onChange={handleChange} style={{ padding: "5px" }} />
      <p>input A dice: {message}</p>
    </div>
  );
};


const B: React.FC<{ onButtonClick: () => void }> = ({ onButtonClick }) => {
  return (
    <div style={{ backgroundColor: "yellow", padding: "10px" }}>
      <h4>Componente B</h4>
      <button onClick={onButtonClick} style={{ padding: "5px" }}>
        Pulsar Botón
      </button>
    </div>
  );
};


const EjStateByProps: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (newMessage: string) => {
    setMessage(newMessage);
  };

  const handleButtonClick = () => {
    setMessage("pulsado botón en B");
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Ejemplo de State by Props</h3>
      <A message={message} onInputChange={handleInputChange} />
      <B onButtonClick={handleButtonClick} />
      <p>{message}</p>
    </div>
  );
};


const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center" as const,
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
};


export default EjStateByProps;
