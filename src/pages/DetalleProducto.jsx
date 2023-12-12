import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import listaProductos from "../data";
export default function DetalleProducto(){
    const {productoId} = useParams();
    /* console.log(productoId); */
    const producto = listaProductos.find((producto) => producto.id == productoId);

    const { image, title, price, description } = producto;

    //console.log(producto.image);
    return(
        <div className="mostrarTodoProducto">
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
        </div>
    )
}