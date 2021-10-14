const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
    },
    subregion: {  
      type: DataTypes.STRING,
    }, 
    population: {
      type: DataTypes.FLOAT,
    },
    area: {
      type: DataTypes.FLOAT,
    },
    id:{
      type: DataTypes.STRING,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
    },
    code:{
      type: DataTypes.STRING(3),
    },
    map: {
      type: DataTypes.STRING,
    },
  });
};
