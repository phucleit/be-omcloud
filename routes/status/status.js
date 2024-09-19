const router = require("express").Router();
const statusController = require("../../controllers/status/controller");

router.post("/", statusController.addStatus);
router.get("/", statusController.getStatus);
router.get("/:id", statusController.getDetailStatus);
router.put("/:id", statusController.updateStatus);
router.delete("/:id", statusController.deleteStatus);

module.exports = router;