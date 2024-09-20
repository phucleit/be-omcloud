const Projects = require("../../models/projects/model");
const logAction = require("../../middleware/action_logs");

const ProjectsController = {
  addProjects: async(req, res) => {
    try {
      const newProjects = new Projects(req.body);
      const saveProjects = await newProjects.save();
      await logAction(req.auth._id, 'Công trình', 'Thêm mới');
      return res.status(200).json(saveProjects);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getProjects: async(req, res) => {
    try {
      const projects = await Projects.find().sort({"createdAt": -1})
        .populate('user_id')
        .populate('service_id')
        .populate('service_plan_id')
        .populate('status_id')
        .populate('maintenance_period_id');
      return res.status(200).json(projects);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getDetailProjects: async(req, res) => {
    try {
      const projects = await Projects.findById(req.params.id)
        .populate('user_id')
        .populate('service_id')
        .populate('service_plan_id')
        .populate('status_id')
        .populate('maintenance_period_id');
      return res.status(200).json(projects);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  updateProjects: async(req, res) => {
    try {
      const projects = await Projects.findById(req.params.id);
      await projects.updateOne({$set: req.body});
      await logAction(req.auth._id, 'Công trình', 'Cập nhật', `/dashboard/projects/${req.params.id}`);
      return res.status(200).json("Cập nhật thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  deleteProjects: async(req, res) => {
    try {
      await Projects.findByIdAndDelete(req.params.id);
      await logAction(req.auth._id, 'Công trình', 'Xóa');
      return res.status(200).json("Xóa thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },
}

module.exports = ProjectsController;