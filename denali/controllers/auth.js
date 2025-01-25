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
  try {
    const { username, email, password } = req.body;

    if (!username) {
      return res.json({
        error: "Username is required"
      })
    }

    if (!password) {
      return res.json({
        error: "Password is required"
      })
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
      return res.json({
        error: "Email is already in use"
      })
    }

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
