import React, { useState } from 'react'

type Props = {}

const Practica32 = (props: Props) => {
  /**
   
   

  type Producto = {
    nombre: string,
    precio: number,
    cantidad: number
  }

  export default function FormularioProductos(props: Props) {
    const [listaproductos, setlistaproductos] = useState<Array<Producto>>([]);

    function procesarformulario(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        let formulario = e.currentTarget;
        const nombre = formulario.nombre.value ?? "";
        const precio = Number(formulario.precioid.value ?? 0);
        const cantidad = Number(formulario.cantidad.value ?? 0);
        const producto: Producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        setlistaproductos([...listaproductos, producto]);
    }
    

    return (
        <div>
            <h3>Info de productos</h3>
            <form onSubmit={procesarformulario}>

                <label htmlFor="nombreid">Nombre</label>
                <input type="text" name="nombre" id="nombreid" /> <br></br>
                <label htmlFor="precioid">Precio</label>
                <input type="number" name="precioid" id="precioid" /> <br></br>
                <label htmlFor="cantidadid">Cantidad</label>
                <input type="number" name="cantidad" id="cantidadid" /> <br></br>
                <button type="submit">Agregar</button>
            </form>

            <textarea value={JSON.stringify(listaproductos,null,2)} cols={100} rows={30} ></textarea>


        </div>
        
    )
    
  }
  */
}

export default Practica32