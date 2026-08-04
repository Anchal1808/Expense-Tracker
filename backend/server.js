// Server Entry Point
// This file initializes the Express application,
// connects to MongoDB, registers middleware and routes,
// and starts the backend server.

const express = require("express");
require("dotenv").config();

const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});