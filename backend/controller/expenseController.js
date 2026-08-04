// Expense Controller
// This file contains the business logic for expense management.
// It handles CRUD operations such as adding, fetching,
// updating, and deleting expenses.

const Expense = require("../models/Expense");

/**
 * @desc    Add a new expense
 * @route   POST /api/expenses
 * @access  Private
 */
const addExpense = async (req, res) => {
  try {
    const { title, amount, category, date, description } = req.body;

    // Create a new expense
    const expense = await Expense.create({
      user: req.user.id, // Logged-in user's ID
      title,
      amount,
      category,
      date,
      description,
    });

    return res.status(201).json({
      message: "Expense added successfully",
      expense,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc    Get all expenses of logged-in user
 * @route   GET /api/expenses
 * @access  Private
 */
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      date: -1,
    });

    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc    Update an expense
 * @route   PUT /api/expenses/:id
 * @access  Private
 */
const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    // Check ownership
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    return res.status(200).json({
      message: "Expense updated successfully",
      expense: updatedExpense,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/**
 * @desc    Delete an expense
 * @route   DELETE /api/expenses/:id
 * @access  Private
 */
const deleteExpense = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    // Check ownership
    if (expense.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }

    await Expense.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Expense deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Export all controller functions
module.exports = {
  addExpense,
  getExpenses,
  updateExpense,
  deleteExpense,
};