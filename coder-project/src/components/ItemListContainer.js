import ProfileCard from "./ProfileCard";
import './ItemListContainer.css'; 
import ImgAlexa from '../img/alexa.png';
import ImgCortana from '../img/cortana.png';
import ImgSiri from '../img/siri.png';

function ItemListContainer(){


    return (

        <div className="item-list-container">
            <ProfileCard titulo="Alexa" img={ImgAlexa}/>
            <ProfileCard titulo="Cortana" img={ImgCortana}/>
            <ProfileCard titulo="Siri" img={ImgSiri}/>
        </div>
  
    )  

}

export default ItemListContainer