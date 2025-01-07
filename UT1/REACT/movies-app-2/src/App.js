import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './Components/Home'; 
import { ThemeProvider, useTheme } from './Components/ThemeContext'; 

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

const Main = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {

    if (theme === 'night') {
      document.body.classList.add('night');
      document.body.classList.remove('day');
      localStorage.setItem('theme', 'night');
    } else {
      document.body.classList.add('day');
      document.body.classList.remove('night');
      localStorage.setItem('theme', 'day');
    }
  }, [theme]); 

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
