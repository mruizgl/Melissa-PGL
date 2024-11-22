import React, { useState, useRef } from 'react';

const Cronometro: React.FC = () => {
  const [segundos, setSegundos] = useState<number>(0); // Segundos introducidos por el usuario
  const [tiempoRestante, setTiempoRestante] = useState<number | null>(null); // Tiempo restante en la cuenta atrás
  const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null); // Referencia para el intervalo

  // Función para iniciar el cronómetro
  const iniciarCronometro = () => {
    if (segundos > 0 && tiempoRestante === null) {
      const tiempoFinal = new Date().getTime() + segundos * 1000; // Calcular el tiempo final

      intervaloRef.current = setInterval(() => {
        const ahora = new Date().getTime();
        const diferencia = Math.max(0, Math.ceil((tiempoFinal - ahora) / 1000)); // Calcular tiempo restante

        setTiempoRestante(diferencia);

        if (diferencia <= 0) {
          detenerCronometro(); // Detener cuando llegue a 0
        }
      }, 1000);
    }
  };

  // Función para detener el cronómetro
  const detenerCronometro = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
    setTiempoRestante(null);
  };

  return (
    <div>
      <h2>Cronómetro</h2>
      <div>
        <label htmlFor="segundos">Segundos:</label>
        <input
          id="segundos"
          type="number"
          value={segundos}
          onChange={(e) => setSegundos(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={iniciarCronometro} disabled={tiempoRestante !== null}>
          Iniciar
        </button>
        <button onClick={detenerCronometro} disabled={tiempoRestante === null}>
          Detener
        </button>
      </div>
      <div>
        {tiempoRestante === null ? (
          <p>Antes de empezar</p>
        ) : tiempoRestante > 0 ? (
          <p>Tiempo restante: {tiempoRestante} segundos</p>
        ) : (
          <p>¡Finalizado!</p>
        )}
      </div>
    </div>
  );
};

export default Cronometro;
