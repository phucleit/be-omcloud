const mongoose = require("mongoose");

const statuschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, {timestamps: true});

const Status = mongoose.model("Status", statuschema);
module.exports = Status;