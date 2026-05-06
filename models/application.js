const mongoose = require("mongoose");

module.exports = mongoose.model("Application", {
  jobId: String,
  freelancerId: String,
  proposal: String,
  status: { type: String, default: "pending" }
});