const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");


const Payhours = sequelize.define("payhours",{  
    //horas trabajadas en la semana
    Hoursworked: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    //tiempo extra
    overtime: {
      type: DataTypes.TINYINT,
      validate: {
        min: 1,
        max: 99,
      },
    },  //Horas  pagadas
    hourspay: {
      type: DataTypes.TINYINT,
      allowNull: false,
      validate: {
        min: 1,
        max: 99,
      },
    },
    paymentdate:{
        type:DataTypes.DATE
        
    }, 
  },
    )