const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

const reportschema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  date_of_issue: {
    type: Date,
  },
  times_issued: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  frequency: {
    type: Number,
  },
  register_test_date: {
    type: Date,
  },
  expired_test_date: {
    type: Date,
  },
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
    ref: "Projects",
  },
  tasks: [taskSchema],
  items: [{
    name: {
      type: String,
      required: false
    },
    unit: {
      type: String,
      required: false
    },
    quantity: {
      type: Number,
      required: false
    }
  }],
  level: {
    type: Number,
  },
  hicon_comment: {
    type: String
  },
  customer_comment: {
    type: String
  },
}, {timestamps: true});

const Reports = mongoose.model("Reports", reportschema);
module.exports = Reports;