require('dotenv').config();  /// A 
const { Sequelize } = require('sequelize');  /////////   A
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
//Importamos los modelos que creamos 
const UserModel = require("./models/User")  //// A 
const FavoriteModel = require("./models/Favorite")   //// A 




// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

///Instanciamos squelize
const sequelize = new Sequelize(
   //Pasamos la url con el usuario, contraseña y el host del .env
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false } //Deja imprimir en la consola 
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
UserModel(sequelize)
FavoriteModel(sequelize)
//

//

// Ejercicio 06
//importamos las tablas por separado
const { User, Favorite } = sequelize.models;

// ¡Relaciona tus modelos aquí abajo!
//La tabla intermedia la crea automaticamente sequelize 
User.belongsToMany(Favorite, { through: "user_favorite" })
Favorite.belongsToMany(User, { through: "user_favorite" })

//Exportamos las tablas creadas y la instancia de sequelize
module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
