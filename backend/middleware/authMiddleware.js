// Authentication Middleware
// This middleware verifies the JWT token sent by the client.
// If the token is valid, it attaches the logged-in user to req.user
// and allows access to protected routes.

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const protect = async (req, res, next) => {
  try {
    let token;

    // Check if Authorization header exists and starts with "Bearer"
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      // Extract token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user details (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      // Continue to the controller
      next();
    } else {
      return res.status(401).json({
        message: "No token provided",
      });
    }
  } catch (error) {
    return res.status(401).json({
      message: "Not authorized",
    });
  }
};

module.exports = protect;