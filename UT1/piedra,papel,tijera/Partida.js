
const DOM = {
    eleccionJugador = document.elementById('eleccionJugador')
}

const opciones ={'piedra', 'papel', 'tijera'};

//elijo aleatoriamente la eleccion de la maquina
function opcionAleatoria() {
    return opciones[rnd(0, 2)];
}

//determina quien gana y quien pierde
function logicaPartida() {
    let eleccionMaquina = opcionAleatoria(); 
    switch (eleccionMaquina) {
        
        case 'piedra':
            if (DOM.eleccionJugador === 'Tijeras') {
                return `<div>Ha perdido vuelva a intentarlo</div>`.innerHTML;
            }else if(DOM.eleccionJugador === 'Papel'){
                return `<div>Ha ganado, felicidades</div>`.innerHTML;
            }
            break;
        case 'tijera':
            if (DOM.eleccionJugador === 'Piedra') {
                return `<div>Ha ganado, felicidades</div>`.innerHTML;
            }else if(DOM.eleccionJugador === 'Papel') {
                return `<div>Ha perdido vuelva a intentarlo</div>`.innerHTML;
            }
            break;
        case 'papel':
            if (DOM.eleccionJugador == 'Tijeras') {
                return `<div>Ha ganado, felicidades</div>`.innerHTML;
            }else if (DOM.eleccionJugador == 'Piedra'){
                return `<div>Ha perdido vuelva a intentarlo</div>`.innerHTML;
            }
            break;
        default:
            return `<div>Es empate vuelva a intentarlo</div>`.innerHTML;
            break;
    }
}

function obtenerinfo() {
    let radios = document.querySelectorAll("[name=eleccionJugador]");
    console.log(radios);
    for (const radio of radios) {
        if( radio.checked ){
            alert(""+radio.value);
        }
    }

}
