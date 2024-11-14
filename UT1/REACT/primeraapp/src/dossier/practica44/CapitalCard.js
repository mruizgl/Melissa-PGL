import React from 'react';

const CapitalCard = ({ nombre, poblacion, imagen }) => {
    return (
        <div className="capital-card">
            <img src={imagen} alt={`Imagen de ${nombre}`} />
            <h2>{nombre}</h2>
            <p>Población: {poblacion.toLocaleString()} habitantes</p>
        </div>
    );
};

export default CapitalCard;