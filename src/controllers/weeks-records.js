const Initweek = require("../models/init-week");
const Employee = require("../models/employee");

const weeksRecords = async (req, res) => {
  const { employenumber } = req.body;

  try {
    const employees = await Employee.findAll({ where: { employenumber: employenumber } });
    console.log(employees, ":::::::");

    // Verificamos si se encontraron empleados
    if (employees.length === 0) {
      return res.status(404).json({ error: "Employee not found." });
    }

    // Tomamos el primer empleado encontrado (asumiendo que no hay duplicados de números de empleado)
    const employee = employees[0];

    // Verificamos si ya existe un registro de inicio de semana para este empleado
    const existingWeek = await Initweek.findOne({ where: { EmployeeId: employee.id } });

    // Si ya existe un registro de inicio de semana para este empleado, devolvemos un error
    if (existingWeek) {
      return res.status(400).json({ error: "A week has already been started for this employee." });
    }

    // Calculamos la fecha del próximo viernes
    const today = new Date();
    const nextFriday = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + ((5 - today.getDay()) % 7)
    );

    // Creamos una nueva entrada en la tabla Initweek
    const newWeek = await Initweek.create({
      Weekinit: today, // Inicio de la semana es hoy
      Weekend: nextFriday, // Fin de la semana es el próximo viernes
      EmployeeId: employee.id, // Utilizamos el ID del sistema para la relación
    });

    return res.status(201).json({ message: "Successful start of the week." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = weeksRecords;
