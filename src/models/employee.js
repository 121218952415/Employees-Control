const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employenumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hourlyrate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Employee;
