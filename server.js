const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();  //  create app

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ✅ THEN use routes
app.use("/api/jobs", require("./routes/jobs"));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});