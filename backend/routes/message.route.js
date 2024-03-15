import express from "express";

import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectroute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMessage);

router.get("/:id", protectRoute, getMessage);

export default router;
