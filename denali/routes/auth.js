const express = require("express");

const { test, login, logout, register, forgotPassword, resetPassword, getProfile } = require("../controllers/auth.js");

const router = express.Router();

router.get("/test", test);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.get("/profile", getProfile)

module.exports = router
