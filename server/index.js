import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./api/routes/user.routes.js";
import authRoutes from "./api/routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// allow json
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// API routes
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

// handle internal error usign middleware
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
