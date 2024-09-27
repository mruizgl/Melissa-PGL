const DOM ={
    enmascarada: document.getElementById("enmascarada"),
    mensajes: document.getElementById("mensajes"),
    errores: document.getElementById("errores"),
    inputApuesta: document.getElementById("inputApuesta"),
    btnApostar: document.getElementById("btnApostar"),
}

console.log( "ejecutnado");
console.log(DOM.btnApostar);

DOM.btnApostar.addEventListener("click", () =>{
    console.log("hola hola");
});

console.log(DOM.btnApostar);

function apostar(){
    let apuesta = DOM.inputApuesta.value;
    console.log("yepa");
    alert("la apuesta es: " + apuesta);
} 