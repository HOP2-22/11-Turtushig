const userModel = require("../model/user.js");
const bcrypt = require("bcrypt");
const { findOne } = require("../model/user.js");

exports.getUser = async (req, res) => {
  if (!req.body?.email) {
    res.status(400).json({ message: "Bad request" });
  }
  const user = await userModel.find();
  if (req.body?.email === user) {
    console.log("User not found");
  }
  try {
    res
      .status(200)
      .json({ message: "Successfully retrieved users", data: user });
  } catch (error) {
    console.log("User not found");
  }
};

exports.login = async (req, res) => {
  if (!req.body?.email || !req.body?.password) {
    res.status(400).json({ message: "Bad request" });
  }
  const { email, password } = req.body;
  try {
    const response = await userModel.findOne({
      email,
    });
    console.log(response);
    if (response === null) {
      res.status(200).json({ status: "error", error: "User not found" });
      return;
    }
    console.log(password, response.password);
    const match = await bcrypt.compare(password, response.password);
    if (match) {
      res
        .status(200)
        .json({ message: "Logged in successfully", username: email });
    } else {
      res.status(404).json({ message: "Email or password incorrect" });
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.send({ status: "error", error: "email already exists" });
    }
    throw error;
  }
};

exports.createUser = async (req, res) => {
  if (!req.body?.email || !req.body?.password) {
    res.status(400).json({ message: "Bad request" });
  }
  const { email, password } = req.body;
  const oldEmail = userModel.findOne({
    email,
  });
  if (req.body.email === oldEmail) {
    return res.send({ status: "error", error: "email already exists" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await userModel.create({
      email,
      password: hashedPassword,
    });
    console.log(response);
    res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
  }
};
