import Card from '../Card/Card';
import style from "./estiloCards.module.css"

export default function Cards({characters, onClose}) {
   // listCharacters.shift()
   return (
      <div className = {style.contenedor}>
         {characters.map((character) =>{
         return (
            <Card 
            key= {character.id} //Esta key de de uso de react 
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}/>

         )
   })}
      </div> )
      }
