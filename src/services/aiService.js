import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

/**
 * Send a message to the AI and get a response
 * @param {string} message - The user's message
 * @returns {Promise<string>} - The AI's response
 */
export async function sendMessageToAI(message) {
    try {
        if (!message) {
            throw new Error("Message is required");
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

        return response.text;
    } catch (error) {
        console.error("❌ Gemini error:", error);
        throw new Error("Failed to get AI response. Please try again.");
    }
}
