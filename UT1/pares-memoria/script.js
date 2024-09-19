document.addEventListener('DOMContentLoaded', () => {
    const intentosMaximosPorNivel = [16, 24, 36]; // Intentos máximos para cada nivel
    let nivel = 0;
    let intentos = 0;
    let celdasReveladas = [];
    let parejasEncontradas = 0;
    let paresNumeros = [];
    let totalCeldas;

    function crearTablero(nivel) {
        const tamanio = 3 + nivel; // Empieza en 3x3 y aumenta
        totalCeldas = Math.pow(tamanio, 2); // Total de celdas (9, 16, 25...)
        const tablero = document.getElementById('tablero');
        tablero.innerHTML = ''; // Limpiar el tablero anterior

        // Generar pares de números
        paresNumeros = generarPares(totalCeldas); // Crear pares de números
        parejasEncontradas = 0;
        intentos = 0;
        document.getElementById('movimientos').textContent = `Movimientos: ${intentos}`;

        let index = 0; // Índice único para cada celda/botón
        for (let i = 0; i < tamanio; i++) {
            const fila = document.createElement('tr');
            for (let j = 0; j < tamanio; j++) {
                const celda = document.createElement('td');
                const boton = document.createElement('button');
                boton.id = index; // Asignar id único a cada botón
                boton.textContent = ''; // Inicialmente vacío
                boton.addEventListener('click', () => {
                    console.log(`Botón con id ${boton.id} clickeado`); // Depuración
                    destapar(boton.id); // Usar el ID del botón al hacer clic
                });
                fila.appendChild(celda);
                celda.appendChild(boton);
                console.log(`Creando botón con id ${index}`); // Depuración
                index++;
            }
            tablero.appendChild(fila); // Agregar la fila completa al tablero
        }
    }

    function generarPares(totalCeldas) {
        let numeros = [];
        let totalPares = Math.floor(totalCeldas / 2); // Total de pares (la mitad del total de celdas)

        // Generar los pares
        for (let i = 1; i <= totalPares; i++) {
            numeros.push(i, i); // Duplicar cada número para formar pares
        }

        // Si el número total de celdas es impar, agregar un número extra
        if (totalCeldas % 2 !== 0) {
            numeros.push(totalPares + 1); // Agregar el número adicional sin pareja
        }

        // Barajar los números
        return numeros.sort(() => Math.random() - 0.5);
    }

    function destapar(index) {
        console.log(`Destapando botón con id ${index}`); // Depuración
        const boton = document.getElementById(index);
        
        // Verificación de existencia del botón
        if (!boton) {
            console.error(`No se encontró el botón con id ${index}`);
            return;
        }

        if (boton.classList.contains('revealed') || celdasReveladas.length === 2) {
            return; // Evitar clics en botones revelados o si ya hay dos celdas seleccionadas
        }

        mostrarNumero(boton, index);

        if (celdasReveladas.length === 1) {
            // Comparar números
            const primerIndex = celdasReveladas[0];
            const primerBoton = document.getElementById(primerIndex);
            if (paresNumeros[primerIndex] === paresNumeros[index]) {
                // Pareja encontrada
                boton.classList.add('revealed');
                primerBoton.classList.add('revealed');
                parejasEncontradas++;
                actualizarAciertos();

                // Verificar si se han encontrado todas las parejas
                if (parejasEncontradas === Math.floor(totalCeldas / 2)) { // Ajuste para todos los tamaños de tablero
                    setTimeout(() => pasarSiguienteNivel(), 1000);
                }
            } else {
                // No coinciden, ocultar después de un tiempo
                setTimeout(() => {
                    ocultarNumero(boton);
                    ocultarNumero(primerBoton);
                }, 1000);
            }
            celdasReveladas = [];
        } else {
            celdasReveladas.push(index);
        }

        intentos++;
        document.getElementById('movimientos').textContent = `Movimientos: ${intentos}`;
    }

    function mostrarNumero(boton, index) {
        boton.textContent = paresNumeros[index]; // Mostrar el número en el botón
        boton.classList.add('revealed');
    }

    function ocultarNumero(boton) {
        boton.textContent = ''; // Ocultar el número
        boton.classList.remove('revealed');
    }

    function actualizarAciertos() {
        document.getElementById('aciertos').textContent = `Aciertos: ${parejasEncontradas}`;
    }

    function pasarSiguienteNivel() {
        nivel++;
        if (nivel < intentosMaximosPorNivel.length) {
            crearTablero(nivel); // Crear un nuevo tablero para el siguiente nivel
        } 
    }

    function reiniciarJuego() {
        nivel = 0;
        crearTablero(nivel); // Reiniciar el tablero a 3x3
    }

    // Inicializar el juego
    crearTablero(nivel);
});
