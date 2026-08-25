// Server Entry Point
// This file initializes the Express application,
// connects to MongoDB, registers middleware and routes,
// and starts the backend server.

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
const incomeRoutes = require("./routes/incomeRoutes");
const budgetRoutes = require("./routes/budgetRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "https://expense-tracker-jet-phi-62.vercel.app",
  })
);

app.use(express.json());

// Connect to MongoDB
connectDB();

// Register Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/income", incomeRoutes);
app.use("/api/budget", budgetRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("Expense Tracker Backend Running");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});