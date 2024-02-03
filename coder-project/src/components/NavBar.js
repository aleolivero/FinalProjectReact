import CartWidget from "./CartWidget";
import './NavBar.css'; 

function NavBar(){


    return (

        <nav className="navbar">
            <div className="nav-brand">Projecto Coder</div>
            
            <div className="nav-categories">
                <h1>Categoría 1</h1>
                <h1>Categoría 2</h1>
                <h1>Categoría 3</h1>
            </div>
            
            <div className="nav-cart">
                <CartWidget />
            </div>
      
      </nav>
      )  

}

export default NavBar