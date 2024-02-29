import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

function Navbar() {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-menu is-active">
                <div className="navbar-start">
                    <div className="navbar-item has-text-centered">
                        <Link className="has-text-white has-text-weight-bold" to="/">Home</Link>
                    </div>
                </div>

                <div className="navbar-item has-text-centered">
                    <Link className="has-text-white has-text-weight-bold" to="/category/electronics">Electronics</Link>
                </div>
                <div className="navbar-item has-text-centered">
                    <Link className="has-text-white has-text-weight-bold" to="/category/jewelery">Jewelery</Link>
                </div>
                <div className="navbar-item has-text-centered">
                    <Link className="has-text-white has-text-weight-bold" to="/category/clothing">Clothing</Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="has-text-white has-text-weight-bold cart">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="cart-counter">0</span> 

                        </div>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
