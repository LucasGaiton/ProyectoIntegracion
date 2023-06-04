let myFavorites = []

const postFav = (req, res) => {
    const isDuplicate = myFavorites.some((char) => char.id === req.body.id)
    if (!isDuplicate)
        myFavorites.push(req.body)
    res.status(200).json(myFavorites)

}

const deleteFav = (req, res) => {
    const { id } = req.params

    if (myFavorites.length != 1) {
        let aux = myFavorites.filter((fav) => fav.id !== +id)
        myFavorites = aux
        res.status(200).json(myFavorites)
    }
    else {
        myFavorites = []
        res.status(200).json([])

    }


}

module.exports = {
    postFav,
    deleteFav
}