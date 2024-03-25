//We import the DataType from sequelize so we can define our table columns
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Initweek = sequelize.define("WeekWorked", {
    weekinit: {
        type: DataTypes.DATE,
        allowNull: false
    },
});


module.exports= Initweek; 