// //We import the DataType from sequelize so we can define our table columns
// const { DataTypes } = require("sequelize");
// const sequelize = require("../config/db");
// const Employees = require("./employee");

// //creamo tabla de inicio de semana , con la columna id como primary key
// const Initweek = sequelize.define(
//   "Initweek",
//   {
//     Id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//     },
//     //iniciamos semana
//     Weekinit: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     //finalisamos la semana
//     Weekend: {
//       type: DataTypes.DATE, // Cambiado a DATE en lugar de VIRTUAL
//       allowNull: false, // Ahora es una columna real, por lo que no puede ser nula
//     },
//     // relacionas la tabla del empleado al que pertenece
//     EmployeeId: {
//       type: DataTypes.STRING,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       references: {
//         model: Employees,
//         key: "id",
//       },
//     },
//   },
//   { timestamps: true }
// );

// module.exports = Initweek;
