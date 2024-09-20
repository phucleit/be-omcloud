const Services = require("../../models/services/model");
const logAction = require("../../middleware/action_logs");

const servicesController = {
  addServices: async(req, res) => {
    try {
      const newServices = new Services(req.body);
      const saveServices = await newServices.save();
      await logAction(req.auth._id, 'Dịch vụ', 'Thêm mới');
      return res.status(200).json(saveServices);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getServices: async(req, res) => {
    try {
      const services = await Services.find().sort({"createdAt": -1}).populate('plan_service_id', 'name');
      return res.status(200).json(services);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getDetailServices: async(req, res) => {
    try {
      const services = await Services.findById(req.params.id).populate('plan_service_id', 'name');
      return res.status(200).json(services);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  updateServices: async(req, res) => {
    try {
      const services = await Services.findById(req.params.id);
      await services.updateOne({$set: req.body});
      await logAction(req.auth._id, 'Dịch vụ', 'Cập nhật', `/dashboard/services/update-services/${req.params.id}`);
      return res.status(200).json("Cập nhật thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  deleteServices: async(req, res) => {
    try {
      await Services.findByIdAndDelete(req.params.id);
      await logAction(req.auth._id, 'Dịch vụ', 'Xóa');
      return res.status(200).json("Xóa thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },
}

module.exports = servicesController;