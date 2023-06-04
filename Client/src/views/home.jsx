import {useState} from "react";
import Cards from "../components/Cards/Cards"
import axios from "axios";

export default function Home({characters,onClose}){
    
    return(
        <>
        <Cards characters={characters} onClose={onClose} /> 
        
        </>
    )
}