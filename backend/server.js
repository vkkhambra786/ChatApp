import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoBb from "./db/connectMNDB.js";

import messageRoutes from "./routes/message.route.js";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
const app = express();
const PORT = process.env.PORT || 5002;

dotenv.config();
app.use(express.json()); // Middleware for parsing JSON
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.listen(PORT, () => {
  connectToMongoBb();
  console.log("Server is running on PORT 5002");
});
