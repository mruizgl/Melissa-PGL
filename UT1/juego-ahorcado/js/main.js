import { Partida } from './partida.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const inputApuesta = document.getElementById('inputApuesta');
const btnApostar = document.getElementById('btnApostar');

let partida;


function iniciarJuego() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

   
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    // Base
    ctx.moveTo(50, 250);
    ctx.lineTo(150, 250);

    // Poste vertical
    ctx.moveTo(100, 250);
    ctx.lineTo(100, 50);

    // Poste horizontal
    ctx.moveTo(100, 50);
    ctx.lineTo(200, 50);

    ctx.stroke();

    const palabras = ["caballo", "elefante", "murcielago", "avioneta"];
    const palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
    partida = new Partida(ctx, palabraAleatoria);
    partida.actualizarInterfaz();
}

btnApostar.addEventListener("click", () => {
    if (!partida.finalizada) {
        const letra = inputApuesta.value;
        if (letra) {
            partida.apostarLetra(letra);
            inputApuesta.value = '';
        }
    }
});

inputApuesta.addEventListener("keyup", (event) => {
    if (event.key === "Enter" && !partida.finalizada) {
        const letra = inputApuesta.value;
        if (letra) {
            partida.apostarLetra(letra);
            inputApuesta.value = '';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    iniciarJuego();
});
