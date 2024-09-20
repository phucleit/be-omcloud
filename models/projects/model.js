const mongoose = require("mongoose");

const projectschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  representative_name: {
    type: String,
    required: true,
    unique: true,
  },
  representative_phone: {
    type: String,
    required: true,
    unique: true,
  },
  representative_mail: {
    type: String,
    required: true,
    unique: true,
  },
  user_id: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "Users",
  }],
  service_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "Services",
  },
  service_plan_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "PlanServices",
  },
  status_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "Status",
  },
  maintenance_period_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "MaintenancePeriod",
  },
}, {timestamps: true});

const Projects = mongoose.model("Projects", projectschema);
module.exports = Projects;