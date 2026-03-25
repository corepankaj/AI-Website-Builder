import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import myRoutes from "./routes/Routes.js";
import makeConnection from "./config/db.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
makeConnection();
app.use("/api", myRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.PORT}`)
);