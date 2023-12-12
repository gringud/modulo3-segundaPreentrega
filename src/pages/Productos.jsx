import listaProductos from "../data"
import { Link } from "react-router-dom"
export default function Productos(){
    console.log(listaProductos);
    return(
        <>
            <h1>Listado de productos</h1>
            <div className="galeria">
                {listaProductos.map((producto) => {
                    return(
                        <article key={producto.id} className="productoCard">
                            <h2>{producto.title.substring(0,35)}</h2>
                            <img className="imgProducto" src={producto.image} alt={producto.description} />
                            <h3>Precio: u$s {producto.price}</h3>
                            <Link to={`/productos/${producto.id}`} className="btn-compra">Mas info</Link>
                        </article>
                    )
                })}
            </div>
        </>
    )
}