const router = require("express").Router();
const { check_role } = require("../../middleware/middleware_role");
const servicesController = require("../../controllers/services/controller");

router.post("/", check_role("66746678f7f723b779b1b05f"), servicesController.addServices);
router.get("/", servicesController.getServices);
router.get("/:id", servicesController.getDetailServices);
router.put("/:id", check_role("66746678f7f723b779b1b060"), servicesController.updateServices);
router.delete("/:id", check_role("66746678f7f723b779b1b061"), servicesController.deleteServices);

module.exports = router;