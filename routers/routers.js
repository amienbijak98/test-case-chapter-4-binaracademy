// import express
const express = require("express");

// init express router
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

// Signin route
router.get("/signin", (req, res) => {
  res.send("Welcome to Signin Page");
});

// Signup route
router.get("/signup", (req, res) => {
  res.send("Welcome to Signup Page");
});

// export default router
export default router;
