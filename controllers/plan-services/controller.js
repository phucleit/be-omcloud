const PlanServices = require("../../models/plan-services/model");
const logAction = require("../../middleware/action_logs");

const planServicesController = {
  addPlanServices: async(req, res) => {
    try {
      const newPlanServices = new PlanServices(req.body);
      const savePlanServices = await newPlanServices.save();
      await logAction(req.auth._id, 'Gói dịch vụ', 'Thêm mới');
      return res.status(200).json(savePlanServices);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getPlanServices: async(req, res) => {
    try {
      const planServices = await PlanServices.find().sort({"createdAt": -1});
      return res.status(200).json(planServices);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getDetailPlanServices: async(req, res) => {
    try {
      const planServices = await PlanServices.findById(req.params.id);
      return res.status(200).json(planServices);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  updatePlanServices: async(req, res) => {
    try {
      const planServices = await PlanServices.findById(req.params.id);
      await planServices.updateOne({$set: req.body});
      await logAction(req.auth._id, 'Gói dịch vụ', 'Cập nhật', `/dashboard/plan-services/update-plan-services/${req.params.id}`);
      return res.status(200).json("Cập nhật thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  deletePlanServices: async(req, res) => {
    try {
      await PlanServices.findByIdAndDelete(req.params.id);
      await logAction(req.auth._id, 'Gói dịch vụ', 'Xóa');
      return res.status(200).json("Xóa thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },
}

module.exports = planServicesController;