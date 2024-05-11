const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Employee = require("./employee");

const Payroll = sequelize.define(
  "Payroll",
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
    weekStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    finalPayment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: true }
);

module.exports = Payroll;
