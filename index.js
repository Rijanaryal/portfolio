import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const OPENAI_KEY = "YOUR_API_KEY_HERE";

app.post("/chat", async (req,res)=>{
  const userMsg = req.body.message;

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method:"POST",
      headers:{
        "Authorization":`Bearer ${OPENAI_KEY}`,
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        model:"gpt-4o-mini",
        messages:[
          {
            role:"system",
            content:
            "You are a smart AI assistant for Rijan Aryal's portfolio. Answer professionally, friendly, and clearly."
          },
          { role:"user", content:userMsg }
        ]
      })
    }
  );

  const data = await response.json();
  res.json({ reply: data.choices[0].message.content });
});

app.listen(3000, ()=>console.log("AI Server running"));
