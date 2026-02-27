import express from "express";
import dotenv from "dotenv";
import handler from "./api/gemini.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Proxy handler for Gemini API
app.post("/api/gemini", async (req, res) => {
  try {
    await handler(req, res);
  } catch (error) {
    console.error("Route error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
