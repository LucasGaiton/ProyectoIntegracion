//Aca van a ir la action; son funciones que retonr objetos 
//Importamos axios 
import axios from "axios";

// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (async (dispatch) => {
        const { data } = await axios.post(endpoint, character)
        return dispatch({
            type: 'ADD_FAV',
            payload: data,
        });
    });
};
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        const { data } = await axios.delete(endpoint)
        return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
        });
    };
};
