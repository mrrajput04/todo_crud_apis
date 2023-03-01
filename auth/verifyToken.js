const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const CustomErrorHandler = require("../error/CustomErrorHandler");

const verifyToken = async (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth)
    return next(CustomErrorHandler.unauthorized("unauthorized access"));
  const token = auth.split(" ")[1];
  try {
    if (token) {
      const accessToken = jwt.verify(token, JWT_SECRET);
      req.token = accessToken;
      next();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = verifyToken;
