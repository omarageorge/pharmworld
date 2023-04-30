import { Router } from "express";
import passport from "passport";
import {
  registerUser,
  logoutUser,
  redirectUser,
} from "../controllers/userController.js";

const router = Router();

// @route   GET /auth/redirect
// @desc    Redirect a user to the appropriate page
// @access  Public/Authenticated
router.get("/redirect", redirectUser);

// @route   POST /auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerUser);

// @route   POST /auth/login
// @desc    Login a user
// @access  Public
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/auth/redirect",
    failureRedirect: "/login",
  })
);

// @route   POST /auth/logout
// @desc    Logout a user
// @access  Private
router.post("/logout", logoutUser);

export default router;
