const MaintenancePeriod = require("../../models/maintenance-period/model");

const maintenancePeriodController = {
  getMaintenancePeriod: async(req, res) => {
    try {
      const maintenancePeriod = await MaintenancePeriod.find().sort({"createdAt": -1});
      return res.status(200).json(maintenancePeriod);
    } catch(err) {
      console.error(err);
      return res.status(500).send(err.message);
    }
  },
}

module.exports = maintenancePeriodController;