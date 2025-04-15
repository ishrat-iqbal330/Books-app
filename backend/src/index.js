import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

const app = express();
dotenv.config();

app.use(express.json()); // Middleware to parse JSON requests

app.use("/api/auth", authRoutes); // Mount the auth routes at /api/auth

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
