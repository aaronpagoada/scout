import express from "express";
import { login, logout, register, verifyEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.js"
import { verifyToken } from "../middleware/verifyToken.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);
router.post("/check-auth", verifyToken, checkAuth);

export default router;
