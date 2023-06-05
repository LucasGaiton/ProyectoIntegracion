const express = require('express'); //importmaos express         //A
const server = express(); // ejecutamos el server 
const PORT = 3001; // puerto 
const router = require("./routes/index")//nos traemos las rautas creadas en routes  ////A

// //Importamos la variable conn de la DB connection 
const { conn } = require('./DB_connection');  ///////////// A

//Midlewares
server.use(express.json())//Esto hace que cuando devolvvamos la informacion se devuelva en formato json


//Este midleware le daba acceso al server  SIEMPRE PONER ESTE MIDLEWARE ARRIBA DE CUALQUIER COSA QUE TENGAS (COMO RUTES O OTRA COSA LA PUTA MADRE QUE TE PARIO )
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});



//Establecemos la primera ruta donde van a estar puestas las demas rutas 
server.use('/rickandmorty', router)



//Sincronizamos sequelize 
conn.sync({ force: true })

server.listen(PORT, () => { //Esto es lo que ejecutara el server cuando se monte 
    console.log('Server raised in port: ' + PORT);
})


