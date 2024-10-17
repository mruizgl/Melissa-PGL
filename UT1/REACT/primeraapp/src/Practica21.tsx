import React, { useEffect, useState } from 'react'

type Props = {}

const Practica21 = (props: Props) => {
    const [fechaactual, setfechaactual] = useState<string>("");
    useEffect(() => {
        const timerID = setInterval(
            tick,
            1000
        );
    }, [])
    function tick() {
        const newfecha = "" + new Date();
        setfechaactual(newfecha);
    }

    return (
        <div>
            <h3>Ejemplo Reloj Dinámico</h3>
            {fechaactual}
        </div>
    )
}

export default Practica21