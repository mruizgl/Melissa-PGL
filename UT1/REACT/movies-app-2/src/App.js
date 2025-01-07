import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './Components/Home'; 
import ThemeToggle from './Components/ThemeToggle'; // Componente para cambiar el tema

function App() {
  const [isNightMode, setIsNightMode] = useState(false); // Sin el tipo boolean

  // Cargar el tema desde localStorage al iniciar la app
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
      setIsNightMode(true);
      document.body.classList.add('night');
      document.body.classList.remove('day');
    } else {
      setIsNightMode(false);
      document.body.classList.add('day');
      document.body.classList.remove('night');
    }
  }, []);

  // Cambiar el tema
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
    if (!isNightMode) {
      document.body.classList.add('night');
      document.body.classList.remove('day');
      localStorage.setItem('theme', 'night');
    } else {
      document.body.classList.add('day');
      document.body.classList.remove('night');
      localStorage.setItem('theme', 'day');
    }
  };

  return (
    <div>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} />  
      </Routes>
    </div>
  );
}

export default App;
