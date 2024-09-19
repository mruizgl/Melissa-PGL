
function crearPersona() {
let p = new Persona("Juan", "Perez", 30);
alert(p.showData() + " - " + p.nombre + " " + p.apellido);
}
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    showData() {
        return this.nombre + " " + this.apellido + ", " + this.edad + " años";
    }

}

DOM.btnApostar.addEventListener("click",apostar);

DOM.inputApuesta.addEventListener(
    "keyup",
    (event)=>{
        if( event.key == "Enter"){
            alert("Intro pulsado");
        }
    }
)