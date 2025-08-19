import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// gemini-1.5-flash
app.post("/api/generate", async (req, res) => {
  try {
    const { prompt } = req.body;
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    res.json({ text: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate content" });
  }
});

app.listen(4000, () => console.log("Server running on port 4000"));










///////////////////////////////////////////





// import dotenv from "dotenv";
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const app = express();
// app.use(cors());
// app.use(express.json());

// const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// app.post("/api/generate", async (req, res) => {
//   try {
//     const { prompt } = req.body;
//     const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
//     const result = await model.generateContent(prompt);

//     const rawText = result.response.text();

//     // Wrap sections with markers so frontend can split easily
//     const formattedText = `
// === MCQs ===
// ${rawText}

// === Interview Questions ===
// ${rawText}

// === Error Detection ===
// ${rawText}
//     `;

//     res.json({ text: formattedText });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to generate content" });
//   }
// });

// app.listen(4000, () => console.log("Server running on port 4000"));
