const { DataTypes, TINYINT } = require("sequelize");
const sequelize = require("../config/db");
const Employees = require("./employees");
const Initweek = require("./init-week");

const Dailyrecord = sequelize.define("Dailyrecord", {
  //id de el dia  que se registro
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  // hora de entrada del dia
  entrytime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  // hora de salida del dia
  exittime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  employeeId: {
    type: DataTypes.STRING,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: Employees,
      key: "id",
    },
  },
  initweekid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: Initweek,
      key: "id",
    },
  },
});
