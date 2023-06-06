const { Favorite } = require("../DB_connection")

const deleteFav = async(req, res) => {
    try {
        const {id} = req.params
        const deleteChar = await Favorite.findOne({where:{id}})
        await deleteChar.destroy()
        return res.status(200).json(await Favorite.findAll())

    } catch (error) {
        return res.status(500).send(error.message)

    }


}

module.exports = deleteFav