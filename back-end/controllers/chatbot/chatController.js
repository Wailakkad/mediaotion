const fetch = require("node-fetch");

const ChatControler = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "X-Title": "Media Web Motion Assistant",
      },
  body: JSON.stringify({
  model: "deepseek/deepseek-r1:free",
  messages: [
    {
      role: "system",
      content: `
You are Media Web Motion's helpful assistant.
- Always answer briefly and directly.
- Only include company details (location, services, phone, etc.) if the user asks for them.
- If the user greets (like "hi", "hello"), reply with a short greeting and offer help, e.g., "Hi, I'm the Media Web Motion assistant. How can I help you?"
- Do not give long or generic answers.
Company info:
Location: Casablanca, Morocco
Services: Web development, branding, community management, SEO, photography, graphic design
Phone: +212 6 10 67 11 98
Email: contact@mediamotion.ma
Today is ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}.
      `.trim()
    },
    { role: "user", content: message }
  ],
}),
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return res.status(500).json({ error: "Invalid response from OpenRouter API", data });
    }

    res.json({ reply: data.choices[0].message.content });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
};

module.exports = { ChatControler };