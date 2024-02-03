
function ProfileCard({titulo, arroba, img}){

    // V1
    // let titulo = props.titulo;
    // let arroba = props.arroba;

    // V2
    // let {titulo, arroba} = props;


    return (

        <div className="item">
            <h3>{titulo}</h3>
            <img src={img}/>
            <p> {arroba} </p>
        </div>
    )  

}

export default ProfileCard