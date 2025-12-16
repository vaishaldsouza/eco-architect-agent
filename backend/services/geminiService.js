import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from "dotenv";
import { PERSONAS } from "../config/personas.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const mockPath = join(__dirname, "..", "data", "mockResults.json");

// Correct initialization for the @google/genai SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function processSourcingRequest({ persona, instructions, imageBuffer }) {
  const personaKey = persona || "senior-eco-architect";
  const personaContext = PERSONAS[personaKey];
  const hasImage = !!imageBuffer;

  // Function to get high-quality Mock data
  const getMock = () => {
    const mocks = JSON.parse(fs.readFileSync(mockPath, "utf-8"));
    const base = mocks[personaKey] || mocks["senior-eco-architect"];
    return {
      persona: personaKey,
      mode: hasImage ? "Visual Analyst (Mock)" : "Generative Consultant (Mock)",
      summary: base.summary,
      sustainability_evaluation: base.sustainability_evaluation,
      eco_score: hasImage ? "A" : "N/A",
      inventory_matches: []
    };
  };

  try {
    // Text-only mode using Real API
    if (!hasImage) {
      const prompt = `
        ${personaContext}
        As a consultant, provide a detailed sustainability strategy for: "${instructions}".
        Focus on materials, lifecycle, and eco-impact.
        Return ONLY valid JSON:
        {
          "summary": "Detailed narrative...",
          "sustainability_evaluation": {
            "positive_indicators": ["..."],
            "risks_or_unknowns": ["..."]
          }
        }
      `;

      // NEW SDK SYNTAX: ai.models.generateContent
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
      });

      const data = JSON.parse(response.text);

      return {
        persona: personaKey,
        mode: "Generative Consultant",
        summary: data.summary,
        sustainability_evaluation: data.sustainability_evaluation,
        eco_score: "N/A",
        inventory_matches: []
      };
    }

    // Image mode: Defaulting to Mock for stability, or implement similar ai.models.generateContent
    return getMock();

  } catch (error) {
    console.error("⚠️ API Failed or Quota hit. Switching to Mock Results.");
    return getMock();
  }
}