const  Employee = require("../models/employee");
const Attendance  = require("../models/attendance");
const  Initweek = require("../models/init-week");
const  Payroll = require("../models/payroll");


// Definición de relaciones
Employee.hasMany(Attendance); // Uno a muchos: Un empleado tiene muchos registros de asistencia
Employee.hasMany(Initweek); // Uno a muchos: Un empleado tiene muchas semanas de inicio
Employee.hasMany(Payroll); // Uno a muchos: Un empleado tiene muchos registros de nómina

Attendance.belongsTo(Employee); // Muchos a uno: Un registro de asistencia pertenece a un empleado
Initweek.belongsTo(Employee); // Muchos a uno: Una semana de inicio pertenece a un empleado
Payroll.belongsTo(Employee); // Muchos a uno: Un registro de nómina pertenece a un empleado

module.exports = {
  Employee,
  Attendance,
  Initweek,
  Payroll
};