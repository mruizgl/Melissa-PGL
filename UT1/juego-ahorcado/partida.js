export class Partida {
    constructor(ctx, palabra) {
        this.ctx = ctx;
        this.palabra = palabra.toUpperCase();
        this.aciertos = Array(this.palabra.length).fill("_");
        this.errores = [];
        this.maxErrores = 7;
        this.finalizada = false;
    }

    apostarLetra(letra) {
        letra = letra.toUpperCase();
        if (this.errores.includes(letra) || this.aciertos.includes(letra)) return;

        if (this.palabra.includes(letra)) {
            this.palabra.split('').forEach((char, index) => {
                if (char === letra) this.aciertos[index] = letra;
            });
        } else {
            this.errores.push(letra);
            this.dibujarAhorcado();
        }

        this.actualizarInterfaz();
        this.verificarFinJuego();
    }

    actualizarInterfaz() {
        const palabraDiv = document.getElementById('palabraAdivinar');
        const erroresDiv = document.getElementById('errores');
    
        if (palabraDiv && erroresDiv) {
            palabraDiv.innerText = `Palabra a descubrir: ${this.aciertos.join(' ')}`;
            erroresDiv.innerText = `Errores: ${this.errores.join(' ')}`;
        } else {
            console.error('Elementos del DOM no encontrados');
        }
    }

    verificarFinJuego() {
        if (!this.aciertos.includes('_')) {
            alert("¡Felicidades, has ganado!");
            this.finalizada = true;
        } else if (this.errores.length >= this.maxErrores) {
            alert(`Has perdido. La palabra era: ${this.palabra}`);
            this.finalizada = true;
        }
    }

    dibujarAhorcado() {
        const pasos = [
            () => {
                // Cuerda 
                this.ctx.beginPath();
                this.ctx.strokeStyle = "red";
                this.ctx.lineWidth = 4;
                this.ctx.moveTo(200, 50);
                this.ctx.lineTo(200, 80);
                this.ctx.stroke();
            },
            () => {
                // Cabeza 
                this.ctx.beginPath();
                this.ctx.strokeStyle = "blue";
                this.ctx.lineWidth = 4;
                this.ctx.arc(200, 100, 20, 0, Math.PI * 2);
                this.ctx.stroke();
            },
            () => {
                // Cuerpo 
                this.ctx.beginPath();
                this.ctx.strokeStyle = "blue";
                this.ctx.lineWidth = 4;
                this.ctx.moveTo(200, 120);
                this.ctx.lineTo(200, 180);
                this.ctx.stroke();
            },
            () => {
                // Brazo izquierdo 
                this.ctx.beginPath();
                this.ctx.strokeStyle = "blue";
                this.ctx.moveTo(200, 140);
                this.ctx.lineTo(170, 160);
                this.ctx.stroke();
            },
            () => {
                // Brazo derecho 
                this.ctx.beginPath();
                this.ctx.strokeStyle = "blue";
                this.ctx.moveTo(200, 140);
                this.ctx.lineTo(230, 160);
                this.ctx.stroke();
            },
            () => {
                // Pierna izquierda 
                this.ctx.beginPath();
                this.ctx.strokeStyle = "blue";
                this.ctx.moveTo(200, 180);
                this.ctx.lineTo(170, 220);
                this.ctx.stroke();
            },
            () => {
                // Pierna derecha 
                this.ctx.beginPath();
                this.ctx.strokeStyle = "blue";
                this.ctx.moveTo(200, 180);
                this.ctx.lineTo(230, 220);
                this.ctx.stroke();
            }
        ];
    
        if (this.errores.length <= pasos.length) {
            pasos[this.errores.length - 1]();
        }
    }
}