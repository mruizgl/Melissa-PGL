import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DisplayPokemon from './dossier/practica45/DisplayPokemon';
import Capital from './dossier/practica45/Capital';
import CapitalesList from './dossier/practica45/CapitalesList';

export default function App() {
  return (
    <BrowserRouter>
      <h1>Aplicación Pokémon y Capitales</h1>
      <nav>
        <Link to="/">Inicio</Link> &nbsp;
        <Link to="/capitales">Capitales</Link> &nbsp;
        <Link to="/displaypokemon/21">Spearow</Link> &nbsp;
        <Link to="/displaypokemon/22">Fearow</Link> &nbsp;
        <Link to="/displaypokemon/37">Vulpix</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Bienvenido a la aplicación Pokémon y Capitales</h2>} />
        <Route path="/displaypokemon/:id" element={<DisplayPokemon />} />
        <Route path="/capital/:id" element={<Capital />} />
        <Route path="/capitales" element={<CapitalesList />} />
      </Routes>
    </BrowserRouter>
  );
}
