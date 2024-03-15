import express from "express";

import protectRoute from "../middleware/protectroute.js";
import { getUserforSideBar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUserforSideBar);

router.get("/:id", protectRoute);

export default router;
