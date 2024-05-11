const creationemployee  = require("./creation-employee");
const Router = require("express");
const router = Router();



router.use("/employment", creationemployee);



module.exports = router;
