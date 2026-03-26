import express from "express";
import generateWebsite from "../controller/Aicontroller.js";
import downloadWebsite from "../controller/Download.js";
const router = express.Router();
router.post("/generate", generateWebsite);
router.post("/download", downloadWebsite);
export default router;