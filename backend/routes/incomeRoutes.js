const express = require("express");

const router = express.Router();

const {
  addIncome,
  getIncome,
} = require("../controller/incomeController");

const protect = require("../middleware/authMiddleware");

// Get all income & Add new income
router
  .route("/")
  .get(protect, getIncome)
  .post(protect, addIncome);

module.exports = router;