const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

const User = require("../models/users");

// Signup
router.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  const hashedPassword =
    await bcrypt.hash(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword
  });

  await user.save();

  res.json({
    message: "User Registered"
  });
});

// Login
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.json({
      message: "User not found"
    });
  }

  const validPassword =
    await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.json({
      message: "Wrong password"
    });
  }

  const token = jwt.sign(
    { id: user._id },
    "secretkey"
  );

  res.json({
    message: "Login Successful",
    token
  });
});

module.exports = router;