const Router = require("express");
const weeksRecords = require("../controllers/weeks-records");
const router = Router();


router.post("/week",weeksRecords)
module.exports = router;
