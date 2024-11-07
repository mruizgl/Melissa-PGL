import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponenteTS from './ComponenteTS'; // Asegúrate de que la ruta es correcta

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ComponenteTS num1={5} num2={10} />
);