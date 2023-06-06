const { Favorite } = require("../DB_connection")

const postFav = async (req, res) => {
    try {
        const { id, name, origin, status, image, species, gender } = req.body
        if (!id || !name || !origin || !status || !image || !species) {
            return res.status(401).send("Faltan datos")
        }

        const fav = await Favorite.create({id, name, origin, status, image, species, gender})

        return res.status(200).json(await Favorite.findAll())
    } catch (error) {
        return res.status(500).send(error.message)

    }


}

module.exports = postFav