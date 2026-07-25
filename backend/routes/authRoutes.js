const express = require("express");

const { registerUser } = require("../controller/authControllers");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;