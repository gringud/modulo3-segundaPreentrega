import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import listaProductos from "../data";
import CategoriasFiltrado from "./CategoriasFiltrado";
export default function FiltradoProducto(){
    const {categoryId} = useParams();
    console.log(categoryId);
    console.log(listaProductos);
    
    return(
            <>
            {/* <h1>Filtrado de articulos por "{categoryId}"</h1> */}
            <CategoriasFiltrado/>
            <div className="galeria">
                {listaProductos.map((producto) => {
                    if (producto.category === categoryId){
                        console.log("igual");
                        return(
                            <article key={producto.id} className="productoCard">
                                <h2>{producto.title.substring(0,35)}</h2>
                                <img className="imgProducto" src={producto.image} alt={producto.description} />
                                <h3>Precio: u$s {producto.price}</h3>
                                <Link to={`/productos/${producto.id}`} className="btn-compra">Mas info</Link>
                        </article>
                        )
                    }
                    /* return(
                        <>

                        </>
                    ) */
                })}
            </div>



{/*         /* <div className="mostrarTodoProducto">
        <h1>Detalle productos</h1>
        <div className="mostrarProducto">
            <div className="mostrarIzq">
                <img src={image} alt={description} />
            </div>
            <div className="mostrarDer">
                <h2>{title}</h2>
                <h3>{description}</h3>
                <h4>Precio u$s {price}</h4>
                <div className="divBtn">
                <button className="mostrarBoton">Comprar</button>
                </div>
            </div>
        </div>
        </div> */}
            </>
    )
}