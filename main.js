const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const app = express()
const port = 16027;

const tokenFore = '7935393167:AAGm2MgowSZSo-zH2x3I8CsKmwXkSFPG0ds';
const botFore = new TelegramBot(tokenFore, {polling: true});

botFore.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    userId = msg.from.id;

    botFore.sendMessage(chatId, `${msg.chat.username} ջան կարողես ուղարկել մտքերտ...`);
});

botFore.on('message', (msg) => {
    const chatId = -1002347536317;
    var text = '';

    if(msg){
        text = msg.text;
        
        if(text != '' && text != '/start'){
            botFore.sendMessage(chatId, text);
        }
    }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
