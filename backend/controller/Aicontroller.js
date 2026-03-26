import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config()

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

const generateWebsite = async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `
                        You are a Website Builder AI Agent.

                        RULES:
                        - Only respond if the user asks to create/build/design a website or webpage.
                        - If the user input is NOT related to website creation, reply EXACTLY:
                        "Hello, I am PRS Agent, a specialized website builder AI. I only handle website creation requests. Please provide a website-related prompt."

                        - If valid:
                        - Create a modern responsive website
                        - Return ONLY HTML + CSS + JS
                        - No explanation, no markdown

                        User Prompt: ${prompt}
                        `,
            })
            res.json({ code: response.text });

             } catch (err) {
                res.status(500).json({ error: err.message });
             }
}

export default generateWebsite;