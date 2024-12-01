import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MoviesProvider } from './context/MovieContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Favorites from './components/Favorites';


const App: React.FC = () => {
  return (
    <MoviesProvider>
      <Router>
        <Navbar />
        <Favorites />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
};

export default App;
