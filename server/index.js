import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import authroutes from "./routes/auth_routes.js";
const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "PUT", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authroutes);
mongoose
  .connect("mongodb+srv://sharath7693:dASAm9lfV67DtEzQ@deadpool.oekbu.mongodb.net/c&s")
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
