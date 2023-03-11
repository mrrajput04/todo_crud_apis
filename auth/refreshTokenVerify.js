const jwt = require("jsonwebtoken");
const { REFRESH_SECRET } = require("../config");
const CustomErrorHandler = require("../error/CustomErrorHandler");

exports.refreshTokenVerify = async (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth)
    return next(CustomErrorHandler.unAuthorized("unauthorized access"));
  const token = auth.split(" ")[1];
  try {
    if (token) {
      const refreshToken = jwt.verify(token, REFRESH_SECRET);
      req.token = refreshToken;
      next();
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


