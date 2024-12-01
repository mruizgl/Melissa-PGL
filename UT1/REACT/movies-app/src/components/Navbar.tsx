import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) return null;

  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/crear">Crear Película</Link>
      <Link to="/categorias">Categorías</Link>
      <button onClick={themeCtx.toggleTheme}>
        Modo {themeCtx.theme === 'light' ? 'Oscuro' : 'Claro'}
      </button>
    </nav>
  );
};

export default Navbar;
