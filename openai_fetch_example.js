require("dotenv").config();
const fetch = require("node-fetch");

const apiKey = process.env.OPENAI_API_KEY;

async function callOpenAI() {
  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Say this is a test" }],
    max_tokens: 5,
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log("Full Response:", result); // Debugging log
  if (result.choices && result.choices.length > 0) {
    console.log("Generated Text:", result.choices[0].message.content);
  } else {
    console.error("No choices found in response:", result);
  }
}

callOpenAI();
