import React, { useState } from "react";
import "./Practica32.css";

type Producto = {
  nombre: string;
  precio: number;
  cantidad: number;
};

const Practica32 = () => {
  const [listaproductos, setlistaproductos] = useState<Array<Producto>>([]);
  const [busqueda, setBusqueda] = useState<string>("");

  function procesarformulario(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const formulario = e.currentTarget;
    const nombre = formulario.nombre.value ?? "";
    const precio = Number(formulario.precio.value ?? 0);
    const cantidad = Number(formulario.cantidad.value ?? 0);

    const producto: Producto = {
      nombre: nombre,
      precio: precio,
      cantidad: cantidad,
    };

    setlistaproductos([...listaproductos, producto]);
  }

  const productosFiltrados = listaproductos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h3 className="title">Info de productos</h3>
      <input
        type="text"
        placeholder="Buscar producto por nombre..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="input"
      />
      <form onSubmit={procesarformulario} className="form">
        <label htmlFor="nombreid">Nombre</label>
        <input type="text" name="nombre" id="nombreid" className="input" />
        <label htmlFor="precioid">Precio</label>
        <input type="number" name="precio" id="precioid" className="input" />
        <label htmlFor="cantidadid">Cantidad</label>
        <input type="number" name="cantidad" id="cantidadid" className="input" />
        <button type="submit" className="button">Agregar</button>
      </form>
      <textarea
        value={JSON.stringify(productosFiltrados, null, 2)}
        cols={100}
        rows={30}
        readOnly
        className="textarea"
      ></textarea>
    </div>
  );
};

export default Practica32;
