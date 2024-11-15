import React, { useRef } from 'react'



const Practica23 = () => {
    const inputnombre = useRef<HTMLInputElement>({} as HTMLInputElement);
    const inputapellido = useRef<HTMLInputElement>({} as HTMLInputElement);
    const divresultado = useRef<HTMLDivElement>({} as HTMLDivElement);

    function establecerLength() {
        let htmlinputnombre = inputnombre.current;
        let nombre = String(htmlinputnombre.value);
        let htmlinputapellido = inputapellido.current;
        let apellido = String(htmlinputapellido.value);

        let htmldiv = divresultado.current;
        let longitud = nombre.length + apellido.length;

        htmldiv.innerText = `La longitud de tu nombre y apellido es: ${longitud}`;
    }
    return (
        <div>
            <h2>Introduzca su nombre y apellido y calculamos la longitud</h2>
            <input type="text" ref={inputnombre} placeholder="Nombre" />
            <input type="text" ref={inputapellido} placeholder="Apellido" />
            <button onClick={establecerLength}>Calcular longitud</button>
            <div ref={divresultado}></div>

        </div>
    )
}

export default Practica23