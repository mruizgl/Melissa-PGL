type Props = {
    numero: number;
  };
  
  const TablaMultiplicar = ({ numero }: Props) => {
    return (
      <div>
        <h4>Tabla de multiplicar del {numero}</h4>
        <ul>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={i}>
              {numero} x {i + 1} = {numero * (i + 1)}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TablaMultiplicar;