import React from 'react';
import TodasLasTablas from './components/TodasLasTablas.tsx';
import './style/App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Tablas de Multiplicar</h1>
      <TodasLasTablas />
    </div>
  );
}

export default App;
