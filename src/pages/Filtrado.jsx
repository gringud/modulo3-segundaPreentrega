import CategoriasFiltrado from "./CategoriasFiltrado";
import FiltradoProducto from "./FiltradoProducto";
import { Outlet } from "react-router-dom";

export default function Filtrado(){
    console.log("ME EJECUTE");
    return(
        <>
            <h1 className="tituloPage">Elija filtro de busqueda</h1>
            {/* <CategoriasFiltrado/> */}
            <FiltradoProducto/>        
        </>
        
    )
}