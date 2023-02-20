const qrcode = require('qrcode-terminal');
const axios = require("axios")

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const app =require('express').Router()



app.get('/client', (req, res) => {
    const client = new Client({
        authStrategy: new LocalAuth()
    })
    client.on('ready', () => {
        console.log('Client is ready!');
    })
    client.on('qr', qr => {
        qrcode.generate(qr, {small: true});
    });
    res.sendStatus(200);
});

// client.on('message',async message => {
//     const content = message.body
//     if (content=="meme"){
//         //const meme = await axios("https://meme-api.herokuapp.com/gimme").then(res =>res.data)
        
//         client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
//     }
//     else if (content=="joke"){
//         const joke = await axios("https://v2.jokeapi.dev/joke/Any?safe-mode").then(res =>res.data)
        
//         const jokemsg =await client.sendMessage(message.from,joke.setup)
//         if(joke.delivery) setTimeout(function(){jokemsg.reply(joke.delivery)},500)
//     }
    
// });


// client.initialize();
