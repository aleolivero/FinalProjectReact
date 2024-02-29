import {Link , useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

function Category(){

    const {categoryId} = useParams();

    return (
        <div className="mt-3">
            <ItemListContainer categoryId={categoryId} />
        </div>
        
    )
}

export default Category;