const Projects = require("../../models/projects/model");
const Services = require("../../models/services/model");
const logAction = require("../../middleware/action_logs");

const ProjectsController = {
  addProjects: async(req, res) => {
    try {
      const newProjects = new Projects(req.body);
      const saveProjects = await newProjects.save();
      const serviceId = req.body.service_id;
      if (serviceId) {
        await Services.findByIdAndUpdate(
          serviceId,
          { $inc: { number_project: 1 } },
          { new: true }
        );
      }
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
      if (!projects) {
        return res.status(404).json('Công trình không tồn tại!');
      }
      const oldServiceId = projects.service_id;
      await projects.updateOne({$set: req.body});
      const newServiceId = req.body.service_id;
      if (newServiceId && oldServiceId && oldServiceId !== newServiceId) {
        await Services.findByIdAndUpdate(
          oldServiceId,
          { $inc: { number_project: -1 } },
          { new: true }
        );

        await Services.findByIdAndUpdate(
          newServiceId,
          { $inc: { number_project: 1 } },
          { new: true }
        );
      }
      await logAction(req.auth._id, 'Công trình', 'Cập nhật', `/dashboard/projects/update-projects/${req.params.id}`);
      return res.status(200).json("Cập nhật thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  deleteProjects: async(req, res) => {
    try {
      const projects = await Projects.findById(req.params.id);
      if (!projects) {
        return res.status(404).json('Công trình không tồn tại!');
      }
      await Projects.findByIdAndDelete(req.params.id);
      const serviceId = projects.service_id;
      if (serviceId) {
        await Services.findByIdAndUpdate(
          serviceId,
          { $inc: { number_project: -1 } },  
          { new: true }
        );
      }
      await logAction(req.auth._id, 'Công trình', 'Xóa');
      return res.status(200).json("Xóa thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },
}

module.exports = ProjectsController;