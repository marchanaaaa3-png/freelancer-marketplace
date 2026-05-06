const express = require("express");
const router = express.Router();

const Job = require("../models/job");

// GET all jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// ADD job
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// DELETE job
router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
});

module.exports = router;