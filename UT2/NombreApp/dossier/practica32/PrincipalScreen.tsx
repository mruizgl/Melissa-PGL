import React, { useState } from 'react'

type Props = {}

const PrincipalScreen = (props: Props) => {

    

    const [personas, setpersonas] = useState<Persona[]>([]);

    async function grabar() {
        const array = ["Ana", "Martino", "Rebeca"];
        let neopersonas = [];
        for (let i = 0; i < array.length; i++) {
            const randomPositionArray = Math.floor(Math.random() * array.length);
            const nombre = array[randomPositionArray];
            const edad = Math.floor(Math.random() * 100) + 1;
            const persona = {
                nombre: nombre,
                edad: edad
            };
            neopersonas.push(persona);
        }
        await PersonaRepository.sa
    }
  return (
    <div>PrincipalScreen</div>
  )
}

export default PrincipalScreen