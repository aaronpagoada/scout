const mongoose = require("mongoose");
const User = require("../models/user.js");
const { hashPassword, comparePasswords } = require("../utils/auth.js")
const jwt = require("jsonwebtoken");

const test = async (req, res) => {
  try {
    res.status(200).json({ message: "hi there" })
  } catch (err) {
    res.status(400).json({ message: "bye" })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.json({
        error: "No user found"
      })
    }
    const match = await comparePasswords(password, user.password)

    if (match) {
      jwt.sign({ email: user.email, id: user._id, username: user.username }, process.env.JWT_SECRET, {}, (err, token) => {
        if (err) {
          throw err
        }
        res.cookie("SCO_TOKEN", token).json(user)
      })
    } else {
      return res.json({
        error: "Password is incorrect"
      })
    }
  } catch (err) {
    console.log(err)
  }
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

const getProfile = async (req, res) => {
  try {
    const { SCO_TOKEN } = req.cookies
    if (SCO_TOKEN) {
      jwt.verify(SCO_TOKEN, process.env.JWT_SECRET, {}, (err, user) => {
        if (err) {
          throw err
        }

        res.json(user)
      })
    } else {
      res.json(null)
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  test,
  login,
  logout,
  register,
  forgotPassword,
  resetPassword,
  getProfile
}
