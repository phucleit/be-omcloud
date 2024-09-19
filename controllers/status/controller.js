const Status = require("../../models/status/model");
const logAction = require("../../middleware/action_logs");

const statusController = {
  addStatus: async(req, res) => {
    try {
      const newStatus = new Status(req.body);
      const saveStatus = await newStatus.save();
      await logAction(req.auth._id, 'Trạng thái', 'Thêm mới');
      return res.status(200).json(saveStatus);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getStatus: async(req, res) => {
    try {
      const status = await Status.find().sort({"createdAt": -1});
      return res.status(200).json(status);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getDetailStatus: async(req, res) => {
    try {
      const status = await Status.findById(req.params.id);
      return res.status(200).json(status);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  updateStatus: async(req, res) => {
    try {
      const status = await Status.findById(req.params.id);
      await status.updateOne({$set: req.body});
      await logAction(req.auth._id, 'Trạng thái', 'Cập nhật', `/dashboard/status/${req.params.id}`);
      return res.status(200).json("Cập nhật thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  deleteStatus: async(req, res) => {
    try {
      await Status.findByIdAndDelete(req.params.id);
      await logAction(req.auth._id, 'Trạng thái', 'Xóa');
      return res.status(200).json("Xóa thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },
}

module.exports = statusController;