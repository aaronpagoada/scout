const mongoose = require("mongoose");
const User = require("../models/user.js");
const { hashPassword, comparePasswords } = require("../utils/auth.js")

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

    const usernameExists = await User.findOne({ username })

    if (usernameExists) {
      return res.json({
        error: "Username is already in use"
      })
    }

    const emailExists = await User.findOne({ email })

    if (emailExists) {
      return res.json({
        error: "Email is already in use"
      })
    }

    const hashedPassword = await hashPassword(password)

    const user = await User.create({ username, email, password: hashedPassword });
    console.log(`User ${user.username} created`)

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
