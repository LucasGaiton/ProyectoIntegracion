//Importamos el modelo de DB 
const {User} = require("../DB_connection")

const login = async (req,res)=>{
    try {
        const {email, password} = req.query
        //Validamos que se hayan mandado el email y password
        if(!email || !password) return res.status(400).send("Faltan datos")
        
        //Validacion de email
        const foundUser = await User.findOne({where:{email}})
        
        //Comprobamos que exista el usuario
        if(!foundUser) return res.status(404).send("Usuario no encontrado")
        
        //Si coincide la contraseña mandamos el usuario sino mandamos el error
        return foundUser.password == password ? res.status(200).json({acess:true}) : res.status(403).send("Contraseña incorrecta")
        
    } catch (error) {
        return res.status(500).send(error.message)
    }

}
module.exports = login  