let myFavorites = []

const postFav = (req, res)=>{
    myFavorites.push(req.body)
    res.status(200).json(myFavorites) 

}

const deleteFav = (req,res)=>{
    const {id} = req.params
    res.status(200).json(myFavorites.filter((fav)=> fav.id !== +id))
}

module.exports = {
    postFav,
    deleteFav
}