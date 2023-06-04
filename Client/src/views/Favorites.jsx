//Importamos el componente card 
import Card from "../components/Card/Card"
//importamos el selector para consumir el estado global
import { useSelector } from "react-redux"
export default function Favorites(){
    const myFavorites = useSelector((store)=>store.myFavorites)
    return (
        <div>
            
            {myFavorites.map(({name, status, species, gander, origin, image, onClose, id})=>{
                return(
                    <Card name={name} status={status} species={species} gander={gander} origin={origin} image={image} onClose={onClose} id={id} />
                )

            })}
        </div>
    )
}