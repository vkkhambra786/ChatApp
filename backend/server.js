import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import connectToMongoBb from "./db/connectMNDB.js";

const app = express();
const PORT = process.env.PORT || 5002;

dotenv.config();
app.use(express.json()); // Middleware for parsing JSON
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

app.listen(PORT, () => {
  connectToMongoBb();
  console.log("Server is running on PORT 5002");
});
