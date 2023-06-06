const getCharById = require("../controllers/getCharById")
const login = require("../controllers/login")
const postFav = require("../controllers/postFav")
const postUser = require("../controllers/postUser")
const deleteFav = require("../controllers/deleteFav")



const router = require("express").Router() //Aca importamos express y ejecutamos el router 


router.get('/character/:id', async (req, res) => {
    getCharById(req,res)
})
router.get('/login', (req, res) => {
    login(req, res)
})
router.post('/login', (req, res) => {
    postUser(req, res)
})
router.post('/fav', (req, res) => {
    postFav(req, res)
})
router.delete('/fav/:id', (req, res) => {
    deleteFav(req, res)
})

module.exports = router
