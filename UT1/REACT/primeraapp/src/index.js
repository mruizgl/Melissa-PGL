import React from 'react';
import ReactDOM from 'react-dom/client';
import Practica13 from './dossier/Practica13';
import PokemonListCard from './dossier/practica43/PokemonListCard'; 
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
root.render(
    <React.StrictMode>
        <Practica13 />
        <PokemonListCard /> 
        
    </React.StrictMode>
);
