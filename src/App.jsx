import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./Layout"
import "./App.css";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Filtrado from "./pages/Filtrado";
import Nosotros from "./pages/Nosotros";
import DetalleProducto from "./pages/DetalleProducto";
import FiltradoProducto from "./pages/FiltradoProducto";


function App() {
  
  return (
    <>
      <div>
        <h1 className="tituloTienda">Tienda mia</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="Productos" element={<Productos/>}/>
            <Route path="productos/:productoId" element={<DetalleProducto/>}></Route>
            <Route path="Filtrado" element={<Filtrado/>}/>
            <Route path="filtrado/:categoryId" element={<FiltradoProducto/>}></Route>
            <Route path="Nosotros" element={<Nosotros/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
