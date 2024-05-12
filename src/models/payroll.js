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
    EmployeeId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Employee,
        key: "id",
      },
    },
    finalPayment: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    
  },
  { timestamps: true }
);

module.exports = Payroll;
