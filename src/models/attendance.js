const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Employee = require("./employee");

const Attendance = sequelize.define(
  "Attendance",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    employeeID: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Employee,
        key: "id",
      },
    },
    checkIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    checkOut: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false }
);

module.exports = Attendance;
