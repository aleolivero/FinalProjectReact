import './ItemCount.css'; // Asegúrate de tener este archivo para ajustes adicionales si son necesarios
import { useState } from 'react';

function ItemCount({ initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="box item-count-container"> {/* La clase `box` de Bulma para darle un contorno y padding */}
            <div className="level is-mobile"> {/* `level` y `is-mobile` para un layout responsivo */}
                <button className="button is-danger level-left" onClick={decrement}>-</button>
                <div className="level-item has-text-centered">{quantity}</div>
                <button className="button is-success level-right" onClick={increment}>+</button>
            </div>
            <div className="has-text-centered mt-4"> {/* Centra el botón de agregar y añade margen superior */}
                <button className="button is-link" onClick={() => onAdd(quantity)}>Add to cart</button>
            </div>
        </div>
    );
}

export default ItemCount;
