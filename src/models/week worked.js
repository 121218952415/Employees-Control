//We import the DataType from sequelize so we can define our table columns
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const WeekWorked = sequelize.define("WeekWorked", {
  employeeId: {
    type: DataTypes.INTEGER,
  },
});
