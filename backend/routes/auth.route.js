import express from "express";
import { logOut, login, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signUp);

router.post("/logout", logOut);

router.post("/login", login);

export default router;
