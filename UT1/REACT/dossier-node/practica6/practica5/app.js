
const {escribir} = require ("./utils/manejarFicheros");
const {crearTabla} = require ("./modelo/tabla");

escribir ("tabla.txt", crearTabla(7) )
.then(console.log("grabado con éxito"))
.catch(err=> console.error(err));