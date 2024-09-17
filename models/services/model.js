const mongoose = require("mongoose");

const serviceschema = new mongoose.Schema({
  display_name: {
    type: String,
    required: false,
  },
}, {timestamps: true});

const Services = mongoose.model("Services", serviceschema);
module.exports = Services;