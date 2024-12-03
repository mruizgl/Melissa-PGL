/**
 * Función para determinar si un número es primo
 * @param {number} num - Número a verificar
 * @returns {boolean} - Verdadero si es primo, falso en caso contrario
 * @author M. Ruiz <www.github.com/mruizgl>
 */
function esPrimo(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    const limite = Math.sqrt(num);
    for (let i = 3; i <= limite; i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Función para generar los primeros n números primos
function generarPrimos(cantidad) {
    const primos = [];
    let numero = 2;
    while (primos.length < cantidad) {
        if (esPrimo(numero)) {
            primos.push(numero);
        }
        numero++;
    }
    return primos;
}

// Manejar el envío del formulario
document.getElementById("primeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const cantidad = parseInt(document.getElementById("cantidad").value, 10);
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "";

    if (isNaN(cantidad) || cantidad <= 0) {
        resultadoDiv.innerHTML = `<p style="color: red;">Por favor, introduce un número válido mayor que 0.</p>`;
        return;
    }

    try {
        const primos = generarPrimos(cantidad);

        resultadoDiv.innerHTML = `<p>Se calcularon ${primos.length} números primos:</p>`;
        resultadoDiv.innerHTML += `<p>${primos.join(", ")}</p>`;
    } catch (error) {
        resultadoDiv.innerHTML = `<p style="color: red;">Error al calcular los números primos: ${error.message}</p>`;
    }
});