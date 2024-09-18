const mongoose = require("mongoose");

const ObjectId = mongoose.Types.ObjectId

const maintenanceperiodchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
});

const MaintenancePeriod = mongoose.model("MaintenancePeriod", maintenanceperiodchema);
module.exports = MaintenancePeriod;

const init = async () => {
  const count = await MaintenancePeriod.estimatedDocumentCount()
  if (count == 0) {
    const array = [
      {
        _id: new ObjectId("757460e3d19aa9fcecc69fa6"),
        name: "Đợt 1",
      },
      {
        _id: new ObjectId("767460e3d19aa9fcecc69fa6"),
        name: "Đợt 2",
      },
      {
        _id: new ObjectId("777460e3d19aa9fcecc69fa6"),
        name: "Đợt 3",
      },
      {
        _id: new ObjectId("787460e3d19aa9fcecc69fa6"),
        name: "Đợt 4",
      },
      {
        _id: new ObjectId("797460e3d19aa9fcecc69fa6"),
        name: "Đợt 5",
      },
      {
        _id: new ObjectId("780460e3d19aa9fcecc69fa6"),
        name: "Đợt 6",
      },
      {
        _id: new ObjectId("771460e3d19aa9fcecc69fa6"),
        name: "Đợt 7",
      },
      {
        _id: new ObjectId("782460e3d19aa9fcecc69fa6"),
        name: "Đợt 8",
      },
      {
        _id: new ObjectId("783460e3d19aa9fcecc69fa6"),
        name: "Đợt 9",
      },
      {
        _id: new ObjectId("784460e3d19aa9fcecc69fa6"),
        name: "Đợt 10",
      },
    ]
    await MaintenancePeriod.insertMany(array);
  }
}
init()