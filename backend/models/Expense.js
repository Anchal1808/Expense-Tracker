// Expense Model
// This file defines the structure (schema) of an expense document
// and creates the Expense model used to interact with the MongoDB
// expenses collection.

const mongoose = require("mongoose");

// Define the schema for an expense
const expenseSchema = new mongoose.Schema(
  {
    // Reference to the user who owns this expense
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Title or name of the expense
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Amount spent
    amount: {
      type: Number,
      required: true,
    },

    // Expense category
    category: {
      type: String,
      required: true,
      enum: ["Food", "Travel", "Shopping", "Bills", "Entertainment", "Other"],
    },

    // Date of the expense
    date: {
      type: Date,
      default: Date.now,
    },

    // Optional description
    description: {
      type: String,
      trim: true,
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

// Create and export the Expense model
module.exports = mongoose.model("Expense", expenseSchema);