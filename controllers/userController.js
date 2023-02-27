const userData = require('../models/user');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const JwtService = require('../services/JwtService')
const jwt  = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const CustomErrorHandler  = require('../error/CustomErrorHandler')

const salt = 10;

exports.userRegister = async (req, res, next)=>{
  const registerSchema = Joi.object({
    firstName: Joi.string().min(3).max(15).required(),
    lastName: Joi.string().min(3).max(15).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-z0-9]{3,30}$"))
      .required(),
    confirm_password: Joi.ref("password"),
  });

  const { error } = registerSchema.validate(req.body);
  if (error) {
    return next(error);
  }

  try {
    const exist = await userData.exists({ email: req.body.email });
    if (exist) {
      return next(
        CustomErrorHandler.alreadyExist("This email is already taken")
      );
    }
  } catch (err) {
    return next(err);
  }
  const { firstName,lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new userData({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });
  let access_token;
  try {
    const result = await user.save(); 
    //Token
    access_token = JwtService.sign({ _id: result._id});
    


  } catch (err) {
    return next(err);
  }

  res.status(200).json({ access_token });
}


exports.userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userData.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ user_id: userData._id, email }, JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
       return res.status(200).json({ access_token: user.token });
    }
    res.status(400).send("Invalid Credentials");
  } catch (error) {
    next(error);
  }
};

exports.forgetPassword = async (req, res, next) => {
  try {
    const exist = await userData.exists({ email: req.body.email });
    if (!exist) {
      return next(
        CustomErrorHandler.notFound("invalid email")
      );
    }
    const token = jwt.sign({ user_id: exist._id }, JWT_SECRET, {
      expiresIn: "2h",
    });

    res.status(200).json({ access_token: token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const Id = req.token.user_id;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await userData.findByIdAndUpdate(
      Id,
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({
      message: "password updated successfully",
      access_token: user,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
