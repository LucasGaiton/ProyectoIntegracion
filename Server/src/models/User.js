const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      //Empezamos a crear las comlumnas 
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true // Validar que el valor de la columna sea una dirección de correo electrónico
         }
      },
      password: {
         type:DataTypes.STRING,
         allowNull:false
      }

   }, { timestamps: false });
};
