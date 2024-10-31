import React, { useState } from "react";


class Persona {
  constructor(public id: number, public nombre: string, public edad: number) {}
}


const PersonaCard: React.FC<{
  persona: Persona;
  onUpdate: (id: number, nombre: string, edad: number) => void;
}> = ({ persona, onUpdate }) => {
  const [nombre, setNombre] = useState<string>(persona.nombre);
  const [edad, setEdad] = useState<number>(persona.edad);

  const handleUpdate = () => {
    onUpdate(persona.id, nombre, edad);
  };

  return (
    <div style={styles.card}>
      <h4>Ficha de {persona.nombre}</h4>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" style={styles.input} />
      <input type="number" value={edad} onChange={(e) => setEdad(Number(e.target.value))} placeholder="Edad" style={styles.input} />
      <button onClick={handleUpdate} style={styles.button}>
        Actualizar
      </button>
    </div>
  );
};

const Practica36: React.FC = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const addPersona = () => {
    const newPersona = new Persona(nextId, "", 0);
    setPersonas([...personas, newPersona]);
    setNextId(nextId + 1);
  };

  const updatePersona = (id: number, nombre: string, edad: number) => {
    const updatedPersonas = personas.map((persona) =>
      persona.id === id ? new Persona(id, nombre, edad) : persona
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
  },
};

export default Practica36;
