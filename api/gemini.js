export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  
  if (!GEMINI_API_KEY) {
    return res.status(500).json({ error: "Missing API key" });
  }

  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const contentType = response.headers.get("content-type") || "";

    if (!response.ok) {
      // upstream returned an error (could be HTML error page)
      const text = await response.text();
      console.error("Gemini upstream error", response.status, text);
      if (contentType.includes("application/json")) {
        try {
          const errJson = JSON.parse(text);
          return res.status(response.status).json(errJson);
        } catch (e) {
          return res.status(response.status).json({ error: text });
        }
      }
      return res.status(502).json({ error: "Upstream error", status: response.status, body: text });
    }

    if (contentType.includes("application/json")) {
      const data = await response.json();
      return res.status(200).json(data);
    }

    // Non-JSON successful response (HTML or plain text)
    const text = await response.text();
    console.warn("Gemini returned non-JSON response", text.slice(0, 200));
    return res.status(200).json({ text, warning: "Unexpected non-JSON response from upstream" });
  } catch (error) {
    console.error("Gemini proxy error:", error);
    return res.status(500).json({ error: error.message });
  }
}