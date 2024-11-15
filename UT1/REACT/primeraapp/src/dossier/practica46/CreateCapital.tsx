import axios from 'axios';
import React from 'react'

export default function createCapital() {
    function agregarCapitalJson(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let formulario: HTMLFormElement = event.currentTarget;
        let inputnombrecapital: HTMLInputElement = formulario.nombrecapital;
        let inputpoblacion: HTMLInputElement = formulario.poblacion;
        let inputurlimagen: HTMLInputElement = formulario.urlimagen;
    
        let nombre: string = inputnombrecapital.value;
        let poblacion: string = inputpoblacion.value;
        let url: string = inputurlimagen.value;
        const newcapital = {
            "nombre": nombre,
            "poblacion": poblacion,
            "imagen": url
        }
        let ruta = "http://localhost:3000/capitales";
        const axiospost = async (rutaDeCapital: string) => {
            try {
                const response = await axios.post(rutaDeCapital, newcapital)
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        axiospost(ruta);
    }
    return (
        <>
            <form onSubmit={agregarCapitalJson}>
                Nombre: <input type="text" name="nombrecapital" /><br />
                Poblacion: <input type="text" id="poblacion" /> <br />
                url imagen: <input type="text" id="urlimagen" /> <br />
                <button type="submit">Crear </button>
            </form>
        </>
    )
}

