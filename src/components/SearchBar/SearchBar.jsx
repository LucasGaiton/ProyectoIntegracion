import style from "./Search.module.css"
import {useState} from "react";
export default function SearchBar({onSearch}) {
   const [id, setId] = useState("");
   function changeId(event){
      setId(event.target.value)
   }

   return (
      <div className={style.contenedor}>
         <input onChange = {changeId} type='search'/>
         <button className={style.button} onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>
   );
}
