const Reports = require("../../models/reports/model");
const logAction = require("../../middleware/action_logs");

const reportsController = {
  addReports: async(req, res) => {
    try {
      const {
        code,
        date_of_issue,
        times_issued,
        name,
        frequency,
        register_test_date,
        expired_test_date,
        project_id,
        tasks,
        items,
        level,
        hicon_comment,
        customer_comment
      } = req.body;

      const count = await Reports.countDocuments({
        $or: [
          { code: code },
          { name: name }
        ]
      });

      if (count > 0 ) throw new Error(`Mã hiệu hoặc tên báo cáo đã được tạo!`)

      const newReport = new Reports({
        code: code,
        date_of_issue: date_of_issue,
        times_issued: times_issued,
        name: name,
        frequency: frequency,
        register_test_date: register_test_date,
        expired_test_date: expired_test_date,
        project_id: project_id,
        tasks: tasks,
        items: items,
        level: level,
        hicon_comment: hicon_comment,
        customer_comment: customer_comment
      });

      const saveReport = await newReport.save();
      await logAction(req.auth._id, 'Báo cáo', 'Thêm mới');
      return res.status(200).json(saveReport);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getReports: async(req, res) => {
    try {
      const reports = await Reports.find().populate('project_id').sort({"createdAt": -1});
      return res.status(200).json(reports);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  getDetailReports: async(req, res) => {
    try {
      const status = await Reports.findById(req.params.id).populate('project_id');
      return res.status(200).json(status);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },

  deleteReports: async(req, res) => {
    try {
      await Reports.findByIdAndDelete(req.params.id);
      await logAction(req.auth._id, 'Trạng thái', 'Xóa');
      return res.status(200).json("Xóa thành công!");
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },
}

module.exports = reportsController;