const express = require("express");
const route = express.Router();
const {ChatControler} = require("./../../controllers/chatbot/chatController");


route.post("/aiChatbot" , ChatControler);




module.exports = route;