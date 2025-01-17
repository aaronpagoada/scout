const mongoose = require("mongoose");
const User = require("../models/user.js");

const test = async (req, res) => {
  try {
    res.status(200).json({ message: "hi there" })
  } catch (err) {
    res.status(400).json({ message: "bye" })
  }
}

const login = async (req, res) => {

}

const logout = async (req, res) => {

}

const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({ username, email, password });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

const forgotPassword = async (req, res) => {

}

const resetPassword = async (req, res) => {

}

module.exports = {
  test,
  login,
  logout,
  register,
  forgotPassword,
  resetPassword
}
