//Importamos el modelo de DB 
const {User} = require("../DB_connection")

const postUser = async(req,res)=> {
    try {
        const {email, password} = req.body
        
        if(!email || !password) throw new Error("faltan datos")
        
        //Buscamos o creamos datos en la tabla (si tnemos un dato con el email y password 
        //ingresado lo obtendremos en user y si no vamos a tener un -1) 
        const user = await User.findOrCreate({where:{email,password}})
        return res.status(200).json(user)

    } catch (error) {
        if(error.message == "faltan datos") 
            return res.status(400).send(error.message)
        return res.status(500).send(error.message)
        
    }
    

}

module.exports = postUser