require('dotenv').config();
const fetch = require('node-fetch');

const apiKey = process.env.OPENAI_API_KEY;

async function callOpenAI() {
  const data = {
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 5,
  };

  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': ,
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  console.log(result.choices[0].text);
}

callOpenAI();

