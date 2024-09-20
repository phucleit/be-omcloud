const router = require("express").Router();
const { check_role } = require("../../middleware/middleware_role");
const projectsController = require("../../controllers/projects/controller");

router.post("/", check_role("667463d04bede188dfb46d7b"), projectsController.addProjects);
router.get("/", projectsController.getProjects);
router.get("/:id", projectsController.getDetailProjects);
router.put("/:id", check_role("667463d04bede188dfb46d7c"), projectsController.updateProjects);
router.delete("/:id", check_role("667463d04bede188dfb46c7c"), projectsController.deleteProjects);

module.exports = router;