import style from "./estiloCard.module.css"
import { Link } from "react-router-dom";

//importamos las actions 
import { addFav, removeFav } from '../../redux/action'

//Hooks
import { useState, useEffect } from "react";

//IMportaciones para utilizar el estado global 
import { useSelector, useDispatch } from 'react-redux'

export default function Card({ name, status, species, gander, origin, image, onClose, id }) {
   //Ejecutamos el selector y el dispatch 
   const myFavorites = useSelector((store)=>store.myFavorites)
   const dispatch = useDispatch()

   //Estado local
   const [isFav, setIsFav] = useState(false)

   ///Use efect
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) setIsFav(true);

      });
   }, [myFavorites]);


   //Handlers 
   const handleFav = () => {
      if (isFav) {
         setIsFav(false)
         dispatch(removeFav(id))//Aca lo que hacemos es mandarle al dispatch la action que queremos que ejecute 
      }
      else {
         setIsFav(true)
         dispatch(addFav({ name, status, species, gander, origin, image, onClose, id }))
      }
   }

   return (
      <div className={style.contenedor}>
         <div className={style.divButton}>
            {
               isFav ? (
                  <button onClick={handleFav}>❤️</button>
               ) : (
                  <button onClick={handleFav}>🤍</button>
               )
            }
            <button className={style.botonOnclose} onClick={() => onClose(id)}>X</button>
         </div>
         <div className={style.divH2}>
            <Link to={`/detail/${id}`}>
               <h2 className={style.cardName}>{name}</h2>
            </Link>
         </div>
         <img className={style.imagen} src={image} alt='' />
         <div className={style.divH2}>
            <h2>Status: {status}</h2>
         </div>
         <div className={style.divH2}>
            <h2>Species: {species}</h2>
         </div>
         <div className={style.divH2}>
            <h2>Gander: {gander}</h2>
         </div>
         <div className={style.divH2}>
            <h2>Origin: {origin}</h2>
         </div>
      </div>
   );

} 