import express from "express";
import {creteWebsite,downloadWebsite} from "../controller/Controller.js";

const router = express.Router();

router.post("/generate",creteWebsite);
router.post("/download", downloadWebsite)

export default router;