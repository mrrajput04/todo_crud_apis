const express = require("express");
const userController = require("../controllers/userController");
const { verifyToken } = require("../auth");
const passwordVerify = require("../middlewares/passwordVerification")

const userRoutes = express.Router();

userRoutes.get("/", userController.getApi);

userRoutes.post("/register", userController.userRegister);

userRoutes.post("/login", userController.userLogin);

userRoutes.post("/forgot-password", userController.forgetPassword);

userRoutes.post("/otp-verification", userController.otpVerify);

userRoutes.put(
    "/verify-reset-password",
    verifyToken,
    passwordVerify,
    userController.resetPassword
);

userRoutes.post(
    "/access-token-generate",
    refreshTokenVerify,
    userController.genAccessToken
);

userRoutes.get("/verify:email", mailVerify, userController.verifyEmail);

module.exports = userRoutes;

