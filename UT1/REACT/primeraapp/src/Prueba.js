function saludoSinParametros(){
    alert("hola Amigo!");
    }
    function saludoConParametros(mensaje){
    alert(mensaje);
    }
    return (
    <>
    <h3>Elige color:</h3>
    <p>Verde: <button onClick={()=>saludoConParametros("verde")}>has elegido verde </button></p>
    <p>Rojo: <button onClick={()=>saludoConParametros("rojo")}>has elegido rojo</button></p>
    </>
    )