import React from 'react';
import '../Css/Navbar.css';  
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">PeliApp by Melissa</div>
      <ul className="navbar-links">
        <li className="navbar-item"><a href="#">Inicio</a></li>
        <li className="navbar-item"><a href="#">Buscar película</a></li>
        <li className="navbar-item"><a href="#">Crear película</a></li>
        <div className="navbar-right">
          <ThemeToggle /> {/* Aquí va el botón de cambio de tema */}

        </div>
      </ul>
    </nav>
  );
};

export default Navbar;