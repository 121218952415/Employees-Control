const creationemployee  = require("./creation-employee");
const initandendweek = require("./week-init");
const Router = require("express");
const router = Router();



router.use("/employment", creationemployee);// creacion de empleado 
router.use("/init", initandendweek);//inicio de semana 



module.exports = router;
