import { Link } from "react-router-dom";
import './ItemContainer.css'; 

function ItemContainer({ id, title, image, description }) {
    return (
        <article className="box item-container"> 
            <figure className="image is-4by3">
                <img src={image} alt={description} className="img-standard"/>
            </figure>
            <h5 className="title is-5">{title}</h5>
            <div className="button-container"> 
                <Link to={`/item/${id}`} className="button is-link">More info</Link>
            </div>
        </article>
    );
}

export default ItemContainer;
