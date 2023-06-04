//Se debe crear el estado global con nombre initialState
const initialState = {
    myFavorites: [],
}



//Creamos el reducer 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAV": return { 
            ...state, myFavorites: action.payload, allCharacters: action.payload };
        case "REMOVE_FAV": return {
            ...state, myFavorites: action.payload
        }
        default: return { ...state }
    }
}
export default reducer