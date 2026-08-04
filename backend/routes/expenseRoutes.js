// Expense Routes
// This file defines all the routes related to expense management.
// Each route is protected using JWT authentication middleware.

const express = require("express");
const router = express.Router();

const {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
} = require("../controller/expenseController");

const protect = require("../middleware/authMiddleware");

// Get all expenses & Add a new expense
router
  .route("/")
  .get(protect, getExpenses)
  .post(protect, addExpense);

// Update & Delete expense by ID
router
  .route("/:id")
  .put(protect, updateExpense)
  .delete(protect, deleteExpense);

module.exports = router;