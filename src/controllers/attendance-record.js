const Payroll = require("../models/payroll");
const Employee = require("../models/employee");

const recordDaily = async (req, res) => {
  const { employeeID } = req.body;
  try {
    const startWeek = await Payroll.findAll({
      where: { employeeID: employeeID },
    });

    if (!startWeek){
      return res
        .status(400)
        .json({ error: "week has not started" });
    }
    
  } catch (err) {
    console.log(error);
  }
};
