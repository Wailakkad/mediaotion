
const fetch = require("node-fetch");


const ChatControlerr = async () =>{
    const {message} = req.body;

    if(!message) {
        return res.status(400).json({error: "Message is required"})
    };


    try{
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "X-Title": "Media Web Motion Assistant",    // your app name
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        message,
      }),
    });


    const data = await response.json();
    res.json({ reply: data.choices[0].message });


    }catch(err){
        console.error(err);
        return res.status(500).json({error : err})
    }
}