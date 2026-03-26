import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import makeConnection from "./config/db.js";
import aiRouter from "./routes/Routes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

makeConnection();

app.use("/api/ai",aiRouter);

app.listen(process.env.PORT,()=>{
    console.log(`Server Runing on Port Number ${process.env.PORT}`);
})

