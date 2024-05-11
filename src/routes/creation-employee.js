const createEmployees = require("../controllers/employee-creation")
const Router = require("express");
const router = Router();


 router.post("/record",createEmployees )

module.exports = router;
