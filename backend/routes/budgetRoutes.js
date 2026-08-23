const express = require("express");

const router = express.Router();

const {
  getBudget,
  setBudget,
} = require("../controller/budgetController");

const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, getBudget);

router.post("/", authMiddleware, setBudget);

module.exports = router;