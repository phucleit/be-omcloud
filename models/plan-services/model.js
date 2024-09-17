const mongoose = require("mongoose");

const planserviceschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const PlanServices = mongoose.model("PlanServices", planserviceschema);
module.exports = PlanServices;