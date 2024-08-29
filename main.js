const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const app = express()
const port = 18012;

app.get('/', (req, res) => {
const tokenOne = '7115844459:AAEN4CqFfEwRx9kPHdZS-bW7FeQlP8Jz754';
const tokenTwo = '6768404903:AAG4YFMG9XvU_URnnv_DBEx0WDTQTlWUkxI';
const tokenThre = '7034922701:AAE9LOHWJhBe0MqI6wZ7wXDGxCgPgjjsLQY';


const botOne = new TelegramBot(tokenOne, {polling: true});
const botTwo = new TelegramBot(tokenTwo, {polling: true});
const botThre = new TelegramBot(tokenThre, {polling: true});

botOne.on('message', (msg) => {
    const chatId = -1002064072355;
    var cleanText = '', text, names = '', plot = '', rating = '', date = '', country = '', genres = '';

    if(msg.video){
        const videoPath = msg.video.file_id;
        if(msg.caption){
            text = msg.caption.replace(/[^\u0531-\u0587\u0561-\u0587\s0-9():,?+=-«»_.:՞՛՝]/g, '');
            text = text.replace(/@\w+/gi, '');
            text = text.replace(/https?:\/\/\S+/gi, '');
        
            const namesMatch = text.match(/Անուն.*?\n/);
            if (namesMatch) {
                names = namesMatch[0].replace(/Անուն/g, '').trim();
            }
            
            const plotMatch = text.match(/Սյուժե\s*(.*?)\n/);
            if (plotMatch) {
                plot = plotMatch[0].replace(/Սյուժե/g, '').trim();
            }
    
            if(names != '' && plot != ''){
                cleanText = `🎭 Անուն - ${names} \n\n🎞️ Սյուժե - ${plot}`;
            }else{
                cleanText = `🌟 ${text}`;
            }
        }

        if(cleanText != ''){
            botOne.sendVideo(chatId, videoPath, { caption : cleanText });
        }else{
            botOne.sendVideo(chatId, videoPath);
        }

    }else if (msg.photo) {
        const photoPath = msg.photo[0].file_id;
        text = msg.caption.replace(/[^\u0531-\u0587\u0561-\u0587\s0-9():,?+=-«»_.:՞՛՝]/g, '');
        text = text.replace(/@\w+/gi, '');
        text = text.replace(/https?:\/\/\S+/gi, '');
    
        const namesMatch = text.match(/Անուն.*?\n/);
        if (namesMatch) {
            names = namesMatch[0].replace(/Անուն:/g, '').trim();
        }

        const ratingMatch = text.match(/Ռեյտինգ.*?\n/);
        if (ratingMatch) {
            rating = ratingMatch[0].replace(/Ռեյտինգ/g, '').trim();
        }

        const dateMatch = text.match(/Տարեթիվ.*?\n/);
        if (dateMatch) {
            date = dateMatch[0].replace(/Տարեթիվ/g, '').trim();
        }

        const countryMatch = text.match(/Երկիր.*?\n/);
        if (countryMatch) {
            country = countryMatch[0].replace(/Երկիր/g, '').trim();
        }

        const genresMatch = text.match(/Ժանրեր.*?\n/);
        if (genresMatch) {
            genres = genresMatch[0].replace(/Ժանրեր/g, '').trim();
        }

        if(names != '' && rating != '' && date != '' && country != '' && genres != ''){
            cleanText = `🎭 Անուն - ${names} \n\n🎬 Ռեյտինգ - ${rating}\n\n📅 Տարեթիվ - ${date} \n\n🌍 Երկիր - ${country}\n\n🎥 Ժանրեր - ${genres}`;
        }else{
            cleanText = `🌟 ${text}`;
        }

        botOne.sendPhoto(chatId, photoPath, { caption : cleanText });
    }
});

botTwo.on('message', (msg) => {
    const chatId = -1002042338651;
    var cleanText = '', text, names = '', plot = '', rating = '', date = '', country = '', genres = '';

    if(msg.video){
        const videoPath = msg.video.file_id;
        if(msg.caption){
            text = msg.caption.replace(/[^\u0531-\u0587\u0561-\u0587\s0-9():,?+=-«»_.:՞՛՝]/g, '');
            text = text.replace(/@\w+/gi, '');
            text = text.replace(/https?:\/\/\S+/gi, '');
        
            const namesMatch = text.match(/Անուն.*?\n/);
            if (namesMatch) {
                names = namesMatch[0].replace(/Անուն/g, '').trim();
            }
            
            const plotMatch = text.match(/Սյուժե\s*(.*?)\n/);
            if (plotMatch) {
                plot = plotMatch[0].replace(/Սյուժե/g, '').trim();
            }
    
            if(names != '' && plot != ''){
                cleanText = `🎭 Անուն - ${names} \n\n🎞️ Սյուժե - ${plot}`;
            }else{
                cleanText = `🌟 ${text}`;
            }
        }

        if(cleanText != ''){
            botTwo.sendVideo(chatId, videoPath, { caption : cleanText });
        }else{
            botTwo.sendVideo(chatId, videoPath);
        }

    }else if (msg.photo) {
        const photoPath = msg.photo[0].file_id;
        text = msg.caption.replace(/[^\u0531-\u0587\u0561-\u0587\s0-9():,?+=-«»_.:՞՛՝]/g, '');
        text = text.replace(/@\w+/gi, '');
        text = text.replace(/https?:\/\/\S+/gi, '');
    
        const namesMatch = text.match(/Անուն.*?\n/);
        if (namesMatch) {
            names = namesMatch[0].replace(/Անուն:/g, '').trim();
        }

        const ratingMatch = text.match(/Ռեյտինգ.*?\n/);
        if (ratingMatch) {
            rating = ratingMatch[0].replace(/Ռեյտինգ/g, '').trim();
        }

        const dateMatch = text.match(/Տարեթիվ.*?\n/);
        if (dateMatch) {
            date = dateMatch[0].replace(/Տարեթիվ/g, '').trim();
        }

        const countryMatch = text.match(/Երկիր.*?\n/);
        if (countryMatch) {
            country = countryMatch[0].replace(/Երկիր/g, '').trim();
        }

        const genresMatch = text.match(/Ժանրեր.*?\n/);
        if (genresMatch) {
            genres = genresMatch[0].replace(/Ժանրեր/g, '').trim();
        }

        if(names != '' && rating != '' && date != '' && country != '' && genres != ''){
            cleanText = `🎭 Անուն - ${names} \n\n🎬 Ռեյտինգ - ${rating}\n\n📅 Տարեթիվ - ${date} \n\n🌍 Երկիր - ${country}\n\n🎥 Ժանրեր - ${genres}`;
        }else{
            cleanText = `🌟 ${text}`;
        }

        botTwo.sendPhoto(chatId, photoPath, { caption : cleanText });
    }
});

const channelUsername = -1002064072355;
var userId;

botThre.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    userId = msg.from.id;

    const keyboard = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '👉 Հետևել', url: 'https://t.me/Kinos_Tas' }],
                [{ text: '✅️ Ստուգել', callback_data: 'submit' }]
            ],
            resize_keyboard: true,
            one_time_keyboard: true
        }
    };

    botThre.sendMessage(chatId, `🧐 ${msg.chat.username} ջան Հետևիր ալիքներին Հայկական ֆիլմերը դիտելու համար։`, keyboard);
});

botThre.on('callback_query', (callbackQuery) => {
        const chatId = callbackQuery.message.chat.id;
        const data = callbackQuery.data;

        if (data === 'submit') {
            
        botThre.getChatMember(channelUsername, userId)
        .then((chatMember) => {

            if (chatMember.status == 'member' || chatMember.status == 'administrator' || chatMember.status == 'creator') {
                const keyboard = {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '🎥 Դիտել', url: 'https://t.me/+NtHq05s1APljOWE6' }]
                        ],
                        resize_keyboard: true,
                        one_time_keyboard: true
                    }
                };

                botThre.sendMessage(chatId, '✅️ Դուք կատարեցիք պայմանները, այժմ կարող եք դիտել՝ սեղմելով կոճակին 👇', keyboard);
            } else {
                const keyboard = {
                    reply_markup: {
                        inline_keyboard: [
                            [{ text: '👉 Հետևել', url: 'https://t.me/Kinos_Tas' }],
                            [{ text: '🔁 Կրկին Ստուգել', callback_data: 'submit' }]
                        ],
                        resize_keyboard: true,
                        one_time_keyboard: true
                    }
                };
                botThre.sendMessage(chatId, '❌ Դուք բաժանորդագրված չեք ալիքներին, Բաժանորդագրվեք և նորից ստուգեք:', keyboard);
            }
        })
        .catch((error) => {
            console.error('Error occurred:', error);
        });
    }
});

          res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
