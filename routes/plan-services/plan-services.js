const router = require("express").Router();
const { check_role } = require("../../middleware/middleware_role");
const planServicesController = require("../../controllers/plan-services/controller");

router.post("/", check_role("667463d04bede188dfb46d79"), planServicesController.addPlanServices);
router.get("/", planServicesController.getPlanServices);
router.get("/:id", planServicesController.getDetailPlanServices);
router.put("/:id", check_role("667463d04bede188dfb46d80"), planServicesController.updatePlanServices);
router.delete("/:id", check_role("667463d04bede188dfb46d81"), planServicesController.deletePlanServices);

module.exports = router;