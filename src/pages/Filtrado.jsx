import CategoriasFiltrado from "./CategoriasFiltrado";
import FiltradoProducto from "./FiltradoProducto";
import { Outlet } from "react-router-dom";

export default function Filtrado(){
    console.log("ME EJECUTE");
    return(
        <>
            <h1>Elija filtro de busqueda</h1>
            {/* <CategoriasFiltrado/> */}
            <FiltradoProducto/>        
        </>
        
    )
}