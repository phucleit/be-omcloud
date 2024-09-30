const router = require("express").Router();
const { check_role } = require("../../middleware/middleware_role");
const reportsController = require("../../controllers/reports/controller");

router.post("/", check_role('667467eb263fb998b9925d47'), reportsController.addReports);
router.get("/", reportsController.getReports);
router.get("/:id", reportsController.getDetailReports);
router.delete("/:id",reportsController.deleteReports);
router.get("/project/:id", reportsController.getReportByProjectId);

module.exports = router;