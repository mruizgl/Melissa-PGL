import React, { useEffect, useState } from 'react';
import CapitalCard from './CapitalCard';
import axios from 'axios';

const CapitalesList = () => {
    const [capitales, setCapitales] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/capitales'); // URL de json-server
                setCapitales(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            {capitales.map((capital) => (
                <CapitalCard 
                    key={capital.id}
                    nombre={capital.nombre}
                    poblacion={capital.poblacion}
                    imagen={capital.imagen}
                />
            ))}
        </div>
    );
};

export default CapitalesList;