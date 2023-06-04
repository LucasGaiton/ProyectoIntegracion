//importamos el estilo de cards para que tengan las mismas proporciones  
import style from "../components/Cards/estiloCards.module.css"
//Importamos el componente card 
import Card from "../components/Card/Card"
//importamos el selector para consumir el estado global
import { useSelector } from "react-redux"
export default function Favorites(){
    const myFavorites = useSelector((store)=>store.myFavorites)
    return (
        <div className = {style.contenedor}>
            
            {myFavorites.map(({name, status, species, gander, origin, image, onClose, id})=>{
                return(
                    <Card name={name} status={status} species={species} gander={gander} origin={origin} image={image} onClose={onClose} id={id} />
                )

            })}
        </div>
    )
}