import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Gemini client
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

app.post("/chat", async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({ error: "Message is required" });
        }

        const prompt = `
        You are "Think Ahead", an AI study assistant.

        Rules:
        - Keep replies SHORT (2-4 sentences)
        - NEVER give direct answers
        - Ask 1-2 guiding questions
        - Be clear and focused

        Student question: ${message}
        `;

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
        });

        res.json({ reply: response.text });
    } catch (error) {
        console.error("❌ Gemini error:", error);
        res.status(500).json({ error: "Gemini API failed" });
    }
});

app.listen(3000, () => {
    console.log("🚀 Gemini server running on http://localhost:3000");
});
