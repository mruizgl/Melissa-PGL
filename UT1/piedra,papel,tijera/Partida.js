const opciones = ['piedra', 'papel', 'tijeras'];

const DOM = {
    eleccionJugador: function () {
        let radios = document.getElementsByName("eleccionJugador");
        for (const radio of radios) {
            if (radio.checked) { // 'checked' verifica si el radio button está seleccionado
                return radio.value.toLowerCase();
            }
        }
        return null; // Si no hay selección
    }
};

//elijo aleatoriamente la eleccion de la maquina
function opcionAleatoria() {
    const posicionAleatoria =  Math.floor(Math.random() * opciones.length);  
    return opciones[posicionAleatoria];
}

//determina quien gana y quien pierde
function logicaPartida(eleccionJugador) {
    let eleccionMaquina = opcionAleatoria(); 

    switch (eleccionJugador) {
        case eleccionMaquina:
        return `Es un empate. Ambos eligieron ${eleccionJugador}`;

        case 'piedra':
            switch (eleccionMaquina) {
                case 'tijeras':
                    return `¡Has ganado! La máquina eligió ${eleccionMaquina}`;
                case 'papel':
                    return `Has perdido. La máquina eligió ${eleccionMaquina}`;
            }
            break;

        case 'tijeras':
            switch (eleccionMaquina) {
                case 'papel':
                    return `¡Has ganado! La máquina eligió ${eleccionMaquina}`;
                case 'piedra':
                    return `Has perdido. La máquina eligió ${eleccionMaquina}`;
            }
            break;

        case 'papel':
            switch (eleccionMaquina) {
                case 'piedra':
                    return `¡Has ganado! La máquina eligió ${eleccionMaquina}`;
                case 'tijeras':
                    return `Has perdido. La máquina eligió ${eleccionMaquina}`;
            }
            break;

        default:
            return 'Elección inválida.';
    }
}



// Función para mostrar el resultado en el HTML
function mostrarResultado() {
    const eleccionJugador = DOM.eleccionJugador();
    if (eleccionJugador) {
        const resultado = logicaPartida(eleccionJugador);
        document.getElementById('resultado').innerHTML = resultado;
    } else {
        alert("Por favor, selecciona una opción antes de pulsar el botón.");
    }
}
