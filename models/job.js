const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  budget: String
});

module.exports = mongoose.model("Job", jobSchema);