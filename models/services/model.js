const mongoose = require("mongoose");

const serviceschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  plan_service_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "PlanServices",
  },
  number_project: {
    type: Number,
    required: false,
    default: 0
  }
}, {timestamps: true});

const Services = mongoose.model("Services", serviceschema);
module.exports = Services;