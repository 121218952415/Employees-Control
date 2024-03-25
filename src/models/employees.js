const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");;

const Employees = sequelize.define(
  "Employees ",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    isadmin : {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  },
  { timestamps: true }
);


module.exports =  Employees ;