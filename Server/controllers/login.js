//Aca importamos los datos que guardamos en utils
const data = require("../utils/users")

//Vamos a comprobar que la password y el email pasados por query existen en la "base de datos" que esta en data
const login = (req, res) => {
    try {
        const { email, password } = req.query
        
        //Buscamos con un find 
        const findUser = data.find((user) => user.email === email && user.password === password)
        
        //Comprobamos 
        if (!findUser) {
            console.log("no encunetra los datos");
            return res.status(200).json({ access: false })}
        console.log(findUser);
        console.log("encuentra los datos pero hay otr problema");
        return res.status(200).json({ access: true })
    } catch (error) {
        return res.status(500).send(error.message)

    }


}
module.exports = login