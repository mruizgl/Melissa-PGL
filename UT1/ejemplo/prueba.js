
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

function canvasTest () {
    let ctx = DOM.canvas.getContext('2d');

    //limpiar el espacio de dibujo
    ctx.clearRect(0,0,DOM.canvas.width, DOM.canvas.height);

    //Dibujando lineas
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 6;

    ctx.moveTo(75,200);
    ctx.lineTo(125, 200);
    ctx.moveTo(100,200);
    ctx.lineTo( 100, 50);

    ctx.stroke();


    //Dibujar cabeza:
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.ellipse(203,83,8,11,0,0, Math.PI*2); //se establece centro y radios
            
    ctx.stroke();

}