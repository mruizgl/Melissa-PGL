type Props = {
    palabra: string;
  };
  
  const ContarLetras = ({ palabra }: Props) => {
    return (
      <div>
        <h4>La palabra "{palabra}" tiene {palabra.length} letras</h4>
      </div>
    );
  };
  
  export default ContarLetras;