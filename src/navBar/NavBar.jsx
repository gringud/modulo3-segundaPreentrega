import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav className="navBar">
            <Link className="itemNavBar" to="/">Home</Link>
            <Link className="itemNavBar" to="productos">Productos</Link>
            <Link className="itemNavBar" to="filtrado">Filtrado</Link>
            <Link className="itemNavBar" to="nosotros">Nosotros</Link>
        </nav>
    )
}