import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import { processSourcingRequest } from "./services/geminiService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

app.post("/api/analyze", upload.single("image"), async (req, res) => {
  try {
    const { persona, instructions } = req.body;
    const imageBuffer = req.file?.buffer;

    const result = await processSourcingRequest({ 
      persona, 
      instructions, 
      imageBuffer 
    });

    res.json(result);
  } catch (err) {
    console.error("Backend Error:", err.message);
    res.status(500).json({ 
      error: "Internal Processing Error",
      message: err.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 GenAI Studio Active: http://localhost:${PORT}`);
});