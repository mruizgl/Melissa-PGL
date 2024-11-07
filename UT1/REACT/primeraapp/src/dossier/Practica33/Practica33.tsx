import React, { useState } from "react";

const Practica33: React.FC = () => {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [primes, setPrimes] = useState<number[]>([]);

  function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const primeNumbers: number[] = [];
    for (let i: number = start; i <= end; i++) {
      if (isPrime(i)) {
        primeNumbers.push(i);
      }
    }
    setPrimes(primeNumbers);
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Encuentra los números primos</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Inicio:
          <input
            type="number"
            value={start}
            onChange={(e) => setStart(parseInt(e.target.value))}
            style={styles.input}
          />
        </label>
        <label>
          Fin:
          <input
            type="number"
            value={end}
            onChange={(e) => setEnd(parseInt(e.target.value))}
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Mostrar Primos</button>
      </form>
      {primes.length > 0 && (
        <div style={styles.result}>
          <h4>Números Primos:</h4>
          <p>{primes.join(", ")}</p>
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

export default Practica33;
