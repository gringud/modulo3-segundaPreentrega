import listaProductos from "../data";
import { Link } from "react-router-dom"

export default function CategoriasFiltrado(){
    console.log(listaProductos[0].category);


    let arrayCategoria = listaProductos.map((producto) =>{
        return (producto.category);
    })

    let resultCategory = arrayCategoria.filter((item,index)=>{
        return arrayCategoria.indexOf(item) === index;
    })
  console.log(resultCategory);


    return(
        <>
            <div className="containerFilter">
                <div className="filtradoCategorias">
                    {resultCategory.map((categorias) =>{
                        return(
                            <div className="divFiltradoCategorias" key={categorias}>
                                {/* <div className="categoriasFilter" key={categorias}>{categorias}</div> */}
                                <Link className="categoriasFilter" to={`/filtrado/${categorias}`}>{categorias}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}