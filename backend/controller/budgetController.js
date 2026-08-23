const Budget = require("../models/budget");

// GET budget
const getBudget = async (req, res) => {
  try {
    const budget = await Budget.findOne({
      userId: req.user.id,
    });

    if (!budget) {
      return res.status(404).json({
        message: "Budget not set",
      });
    }

    res.status(200).json(budget);
  } catch (error) {
    console.error("Get budget error:", error);

    res.status(500).json({
      message: "Failed to get budget",
    });
  }
};


// CREATE / UPDATE budget
const setBudget = async (req, res) => {
  try {
    const { monthlyLimit } = req.body;

    if (
      monthlyLimit === undefined ||
      Number(monthlyLimit) < 0
    ) {
      return res.status(400).json({
        message: "Please enter a valid budget",
      });
    }

    const budget = await Budget.findOneAndUpdate(
      { userId: req.user.id },
      {
        userId: req.user.id,
        monthlyLimit: Number(monthlyLimit),
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.status(200).json({
      message: "Budget saved successfully",
      budget,
    });
  } catch (error) {
    console.error("Set budget error:", error);

    res.status(500).json({
      message: "Failed to save budget",
    });
  }
};

module.exports = {
  getBudget,
  setBudget,
};