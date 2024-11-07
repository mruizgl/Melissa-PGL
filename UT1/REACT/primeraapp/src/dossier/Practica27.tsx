import React, { useRef, useState } from 'react'

type Props = {}

const Practica27 = (props: Props) => {

    const [stateFecha, setstateFecha] = useState<string>("");
    const [stateButton, setstateButton] = useState<boolean>(false);
    const refTimer = useRef<ReturnType<typeof setInterval>>();

    function actualizarHora() {
        setstateFecha( "" + new Date());
    }

    function iniciarParar() {
        if ( !stateButton ) {
            refTimer.current = setInterval(actualizarHora, 1000);
            setstateButton(true);
        } else {
            clearInterval(refTimer.current);
            setstateButton(false);
    }

    return (
        <div>
            <h3>prueba timer</h3>
            <button onClick={iniciarParar}>{stateButton?"parar":"iniciar"}</button>
            <p>{stateFecha}</p>
        </div>
    )
    }
}

export default Practica27