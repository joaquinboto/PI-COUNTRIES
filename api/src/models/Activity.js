const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
          isEven(value) {
            if(value < 1 || value > 5) {
              throw new Error('Solo valores menores a 5 y mayores a 1')
            }
          }
        }
    },
    duracion: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 120,
          isEven(value) {
            if(value < 1 || value > 120) {
              throw new Error('Maximo 120 minutos')
            }
          }
        }
    },
    temporada: {
        type: DataTypes.ENUM('Verano' , 'Otoño' , 'Invierno' , 'Primavera')
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updateAt: false,
  }
  );
};