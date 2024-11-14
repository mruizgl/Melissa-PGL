import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CapitalesList from './CapitalesList';
import Capital from './Capital';

export default function App() {
  return (
    <BrowserRouter>
      <h1>Aplicación Capitales</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<CapitalesList />} />
        <Route path="/capital/:id" element={<Capital />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> &nbsp;
      <Link to="/capital/1">Madrid</Link> &nbsp;
      <Link to="/capital/2">Barcelona</Link> &nbsp;
    </nav>
  );
}
