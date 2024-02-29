import { getItems } from "../data";
import ItemContainer from "./ItemContainer";
import {Link , useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function ItemListContainer({categoryId}){

    const [items, setItems] = useState([]);

    useEffect(()=>{
        getItems()
            .then(response=>{
            
                if (categoryId) {
                    setItems(response.filter( (item)=> item.category.includes(categoryId)))
                }
                else{
                    setItems(response)
                }

            })
            .catch(error=>{
                console.error(error)
            })
    })

    return (
        <div className="container"> 
            <div className="columns is-multiline"> 
                {items.map((item)=>{
                    return (
                        <div key={item.id} className="column is-one-third">
                            <ItemContainer id={item.id} title={item.title} image={item.image} description={item.description} />
                        </div>
                    );
                })}
            </div>

        </div>

    )
    

}


export default ItemListContainer;