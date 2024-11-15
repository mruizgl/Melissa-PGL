import React from 'react';
import PracticarTabla from './PracticarTabla';

const TodasLasTablas: React.FC = () => {
  const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];  

  return (
    <div className="grid">
      {arr.map((tabla, index) => (
        <PracticarTabla key={index} tabla={tabla} />
      ))}
    </div>
  );
};

export default TodasLasTablas;
