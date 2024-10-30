import express from "express";
import createUserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware/authMiddleware.js";

const userRouter = (userConnection) => {
  const User = createUserModel(userConnection);
  const router = express.Router();

  router
    .get("/users", authMiddleware, async (req, res) => {
      try {
        const user = await User.find();
        res.json(user);
      } catch (e) {
        res.status(500).json({ error: "Failed to fetch products" });
      }
    })
    .get("/user/:id", authMiddleware, async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        if (!user) {
          res.status(404).json({ error: "Product not found" });
        }
        res.json(user);
      } catch (e) {
        res.status(500).json({ error: "Failed to fetch product" });
      }
    })
    .post("/user", async (req, res) => {
      try {
        const newUser = new User({
          email: req.body.email,
          password: req.body.password,
        });

        await newUser.save();
        res.status(201).json(newUser);
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to add product" });
      }
    })
    .post("/login", async (req, res) => {
      const { email, password } = req.body;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ error: "Invalid credentials" });
        }
        console.log("JWT_SECRET:", process.env.JWT_SECRET);
        // Створення JWT токена
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "10d",
        });

        res.json({ message: "Login successful", token });
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to log in user" });
      }
    })
    .post("/register", async (req, res) => {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ error: "Email and password are required" });
      }

      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
          email,
          password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
      } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Failed to register user" });
      }
    });
  return router;
};

export default userRouter;
