import express from "express";
import { login, logout, signup, onboard } from "../controllers/authControllers.js";
import { protectRoute } from "../../middleware/authMiddleware.js";

const router = express.Router()

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.post("/onboarding", protectRoute, onboard);

export default router;