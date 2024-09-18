const router = require("express").Router();
const maintenancePeriodController = require("../../controllers/maintenance-period/controller");

router.get("/", maintenancePeriodController.getMaintenancePeriod);

module.exports = router;