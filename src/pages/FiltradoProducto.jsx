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
            {(typeof (categoryId) === "undefined")
                ?<h1></h1>
                :<h1 className="tituloPage">Filtrado de articulos por "{categoryId}"</h1>
            }
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
            </>
    )
}