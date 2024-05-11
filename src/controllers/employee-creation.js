const Employee = require("../models/employee");

const createEmployees = async (req, res) => {
  const { firstName, lastName, position, employeeID,weeklySalary } = req.body;

  try {

    if (!firstName || !lastName || !position || !employeeID || !weeklySalary) {
      return res
        .status(400)
        .json({ error: "Name, lastName, and position are required." });
    }
    // console.log(":::::::::::::::",firstName,
    //   lastName,
    //   position,
    //   employeeID,
    //   weeklySalary)
    const createRegisyter = await Employee.create({
      firstName,
      lastName,
      position,
      employeeID,
      weeklySalary
    });

    return res.status(201).json({ message: "Successfully created employee." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = createEmployees;
