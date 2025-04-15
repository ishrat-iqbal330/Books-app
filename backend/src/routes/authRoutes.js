import express from "express";

const router = express.Router();

router.get("/login", async (req, res) => {
  // Handle login logic here
  res.send("Login successful!");
});

router.post("/register", async (req, res) => {
  // Handle registration logic here
  res.send("Registration successful!");
});

export default router;
