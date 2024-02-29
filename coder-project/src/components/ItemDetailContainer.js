import { Link } from "react-router-dom";
import { getItems } from "../data";
import './ItemDetailContainer.css'; 
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";

function ItemDetailContainer({ itemId }) {

    console.log(itemId)
    const [item, setItem] = useState([]);

    useEffect(()=>{
        getItems()
            .then(response=>{
                setItem(response.find(item => item.id == itemId))
            })
            .catch(error=>{
                console.error(error)
            })
    })

    console.log(item)
    const { title, price, description, category, image, rating: { rate, count }  } = item;

    const handleAddToCart = (quantity) => {
        console.log(`Added ${quantity} of item ${title} to cart`);
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-content columns">
                    <div className="column is-half">
                        <figure className="image">
                            <img src={image} alt={description} className="detail-image" />
                        </figure>
                    </div>
                    <div className="column is-half">
                        <h2 className="subtitle is-4">{title}</h2>
                        <h3 className="subtitle is-6">{description}</h3>
                        <h3 className="subtitle is-6">Category: {category}</h3>
                        <h3 className="subtitle is-6">Rating: {rate} ⭐</h3>
                        <h3 className="subtitle is-6">Reviews: {count}</h3>
                        <h3 className="subtitle is-6">Price: ${price}</h3>
                            <ItemCount initial={1} onAdd={handleAddToCart} />
                            <Link to="/" className="button is-link">Go back</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetailContainer;

