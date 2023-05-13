import style from "./estiloCard.module.css"
import { Link } from "react-router-dom";
export default function Card({name, status,species,gander,origin,image, onClose,id}) {
   return (
      <div className={style.contenedor}>
         <div className={style.divButton}>
            <button className = {style.botonOnclose} onClick={()=>onClose(id)}>X</button>
         </div>
         <div className={style.divH2}>
            <Link to={`/detail/${id}`}>
               <h2 className={style.cardName}>{name}</h2>
            </Link>
         </div>
         <img className = {style.imagen}src={image} alt=''/>
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