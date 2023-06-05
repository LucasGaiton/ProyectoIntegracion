const URL = "https://rickandmortyapi.com/api/character/" //Guardamos la url en una variable 
//importamos axios
const axios = require("axios")

//Funciones 
const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios.get(URL + id)
        const char = {
            id : data.id,
            status : data.status,
            name : data.name,
            species : data.species,
            origin : data.origin,
            image : data.image,
            gander : data.gander
        }
        return res.status(200).json(char)
    } catch (error) {
        if (/404/.test(error.message))
            return res.status(404).send("No se ha encontrado personaje con ese id")
        return res.status(500).send(error.message)
    }

}

module.exports = getCharById 