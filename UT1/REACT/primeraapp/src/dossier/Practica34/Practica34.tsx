import React, { useState } from "react";

const Practica34: React.FC = () => {
  const [dogAge, setDogAge] = useState<number>(0);
  const [size, setSize] = useState<string>("pequeño");
  const [humanAge, setHumanAge] = useState<number | null>(null);

  const calculateHumanAge = () => {
    let ageFactor = 0;

    switch (size) {
      case "pequeño":
        ageFactor = 15; 
        break;
      case "mediano":
        ageFactor = 12; 
        break;
      case "grande":
        ageFactor = 10; 
        break;
      default:
        break;
    }


    const calculatedHumanAge = dogAge * ageFactor;
    setHumanAge(calculatedHumanAge);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Calculadora de Edad de Perro</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calculateHumanAge();
        }}
        style={styles.form}
      >
        <label>
          Edad del perro (en años):
          <input
            type="number"
            value={dogAge}
            onChange={(e) => setDogAge(Number(e.target.value))}
            style={styles.input}
          />
        </label>
        <div style={styles.radioGroup}>
          <label>
            <input
              type="radio"
              name="size"
              value="pequeño"
              checked={size === "pequeño"}
              onChange={(e) => setSize(e.target.value)}
            />
            Pequeño
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="mediano"
              checked={size === "mediano"}
              onChange={(e) => setSize(e.target.value)}
            />
            Mediano
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="grande"
              checked={size === "grande"}
              onChange={(e) => setSize(e.target.value)}
            />
            Grande
          </label>
        </div>
        <button type="submit" style={styles.button}>Calcular Edad Humana</button>
      </form>
      {humanAge !== null && (
        <div style={styles.result}>
          <h4>Edad Humana del Perro:</h4>
          <p>{humanAge} años</p>
        </div>
      )}
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
  form: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "5px",
    fontSize: "16px",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
  result: {
    marginTop: "20px",
    fontSize: "18px",
  },
};

export default Practica34;
