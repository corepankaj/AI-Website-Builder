import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
import Website from "../models/Website.js";
import { createZip } from "../utils/zipService.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const creteWebsite = async(req, res)=>{
     try {
    const { prompt } = req.body;
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `
Generate a complete responsive website using:
- HTML
- Tailwind CSS (CDN)
- Vanilla JavaScript

Return ONLY code (no explanation)

Prompt: ${prompt}
      `,
    });

    const code = result.text;
    const saved = await Website.create({ prompt, code });
    res.json({ code, id: saved._id });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Generation failed" });
  }
}

const downloadWebsite = async(req, res)=>{
   const { pages } = req.body;
  createZip(res, pages);
}

export {creteWebsite, downloadWebsite};