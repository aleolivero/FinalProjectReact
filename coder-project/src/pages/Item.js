import {Link , useParams } from "react-router-dom";
import ItemDetailContainer from "../components/ItemDetailContainer";

function Item(){
    
    const {itemId} = useParams();

    
    return (

        <div>
            <ItemDetailContainer itemId={itemId} />
        </div>
        
    )
}

export default Item;