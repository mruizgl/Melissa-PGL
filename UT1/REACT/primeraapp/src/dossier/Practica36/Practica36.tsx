import React, { useState } from "react";


class Persona {
  constructor(public id: number, public nombre: string, public edad: number, public altura: number, public peso: number) {}
}


const PersonaCard: React.FC<{
  persona: Persona;
  onUpdate: (id: number, nombre: string, edad: number,  altura: number, peso: number) => void;
}> = ({ persona, onUpdate }) => {
  const [nombre, setNombre] = useState<string>(persona.nombre);
  const [edad, setEdad] = useState<number>(persona.edad);
  const [altura, setAltura] = useState<number>(persona.altura);
  const [peso, setPeso] = useState<number>(persona.peso);

  const handleUpdate = () => {
    onUpdate(persona.id, nombre, edad, altura, peso);
    
  };

  //const calcularIMC = (persona: Persona) => {
  //  return persona.peso / (persona.altura * persona.
  //altura);}

  return (
    <div style={styles.card}>
      <h4>Ficha de {persona.nombre}</h4>
      <p>Nombre</p>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" style={styles.input} />
      <p>Edad</p>
      <input type="number" value={edad} onChange={(e) => setEdad(Number(e.target.value))} placeholder="Edad" style={styles.input} />
      <p>Altura</p>
      <input type="number" value={altura} onChange={(e) => setAltura(Number(e.target.value))} placeholder="Altura" style={styles.input} />
      <p>Peso</p>
      <input type="number" value={peso} onChange={(e) => setPeso(Number(e.target.value))} placeholder="Peso" style={styles.input} />
      <button onClick={handleUpdate} style={styles.button}>
        Actualizar
      </button>
      <div>
        <p>El IMC es: {persona.peso/((persona.altura/100)*(persona.altura/100))}</p>
      </div>
    </div>
  );
};

const Practica36: React.FC = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addPersona = () => {
    const newPersona = new Persona(nextId, "", 0, 0, 0);
    setPersonas([...personas, newPersona]);
    setNextId(nextId + 1);
  };

  const updatePersona = (id: number, nombre: string, edad: number, altura: number, peso: number) => {
    const updatedPersonas = personas.map((persona) =>
      persona.id === id ? new Persona(id, nombre, edad, altura, peso) : persona
    );
    setPersonas(updatedPersonas);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Gestor de Personas</h3>
      <button onClick={addPersona} style={styles.addButton}>
        +
      </button>
      {personas.map((persona) => (
        <PersonaCard key={persona.id} persona={persona} onUpdate={updatePersona} />
      ))}
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
  addButton: {
    padding: "10px",
    fontSize: "20px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px",
    borderRadius: "5px",
    textAlign: "left" as const,
    displays: "inline-block",
  },
  input: {
    padding: "5px",
    fontSize: "16px",
    margin: "5px",
  },
  button: {
    padding: "5px 10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    marginLeft: "50px",
    
  },
};

export default Practica36;
