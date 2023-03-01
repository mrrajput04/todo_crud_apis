const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const CustomErrorHandler = require("../error/CustomErrorHandler");

exports.verifyToken = async (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth)
    return next(CustomErrorHandler.unAuthorized("unauthorized access"));
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

exports.mailVerify = async (req, res, next) => {
  try {
    const auth = req.query.token;
    if (auth) {
      const accessToken = jwt.verify(auth, JWT_SECRET);
      req.auth = accessToken;
      next();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
