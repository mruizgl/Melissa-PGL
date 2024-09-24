const fs = require('fs');

function getTabla(tabla) {
    let limite = 10;
    let respuesta =
    `---------------------------
    TABLA DEL ${tabla}
    ---------------------------
    `;
    for (let i = 1; i <= limite; i++) {
        respuesta += `${tabla} * ${i} = ${tabla * i} \n`;
    }
    return respuesta;
}

fs.writeFile(
    'tabla.txt', // nombre del fichero
    getTabla(4), // información a guardar
    (err) => { // callback respuesta al finalizar
        if (err)
            throw console.log("No se pudo grabar el fichero");
        else
            console.log("Se ha grabado");
    }
);