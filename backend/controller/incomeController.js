const Income = require("../models/Income");

// Add Income
const addIncome = async (req, res) => {
  try {
    const { title, amount, date, description } = req.body;

    const income = await Income.create({
      user: req.user.id,
      title,
      amount,
      date,
      description,
    });

    return res.status(201).json({
      message: "Income added successfully",
      income,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Get all Income
const getIncome = async (req, res) => {
  try {
    const income = await Income.find({
      user: req.user.id,
    }).sort({
      date: -1,
    });

    return res.status(200).json(income);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addIncome,
  getIncome,
};