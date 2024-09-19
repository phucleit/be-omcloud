const router = require("express").Router();
const { check_role } = require("../../middleware/middleware_role");
const statusController = require("../../controllers/status/controller");

router.post("/", check_role("667467eb263fb998b9925d3a"), statusController.addStatus);
router.get("/", statusController.getStatus);
router.get("/:id", statusController.getDetailStatus);
router.put("/:id", check_role("667467eb263fb998b9925d3b"), statusController.updateStatus);
router.delete("/:id", check_role("667467eb263fb998b9925d3c"),statusController.deleteStatus);

module.exports = router;