const URL = "https://rickandmortyapi.com/api/character/" //Guardamos la url en una variable 
//importamos axios
const axios = require("axios")

//Funciones 
const getCharById = (req, res) => {
    const { id } = req.params
    axios.get(URL + id).
        then((res) => { return res.data }).
        then(({ name, status, species, origin, image, gander }) => {
            const char = {
                id,
                status,
                name,
                species,
                origin,
                image,
                gander
            }
            return res.status(200).json(char)
        }).
        catch((error) => {
            if(/404/.test(error.message))
                return res.status(404).send("No se ha encontrado personaje con ese id")
            return res.status(500).send(error.message)


        })



}

module.exports = getCharById 