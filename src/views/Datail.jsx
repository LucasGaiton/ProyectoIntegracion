import { useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Style from "../components/Detail/Detail.module.css"

export default function Datail(){
    const {id} = useParams()
    const [character, setCharacter] = useState({})
        useEffect(() => {
            axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
            });
            return setCharacter({});
        }, [id]);
        
    return(
        <>
        <div className={Style.Contenedor}>
            <div className={Style.DivInfo}>
                <h1>Nombre:"{(character.name ? character.name : null)}</h1>
                <h1>Statu:"{(character.status ? character.status : null)}"</h1>
                <h1>Specie:"{(character.species ? character.species : null)}"</h1>
                <h1>Gander:"{(character.gender ? character.gender : null)}"</h1>
                <h1>Orgin:"{character.origin?.name && character.origin?.name}"</h1>

            </div>
            <div className={Style.DivImagen}>
                <img className={Style.Imagen} src={character.image} alt="" />
            </div>
        </div>     
        </>
    )
}