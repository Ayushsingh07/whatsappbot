const qrcode = require('qrcode-terminal');
const axios = require("axios")

const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
})
client.on('ready', () => {
    console.log('Client is ready!');
})
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('message',async message => {
    const content = message.body
    if (content=="pls meme"){
        const meme = await axios("https://meme-api.herokuapp.com/gimme").then(res =>res.data)
        
        client.sendMessage(message.from, await MessageMedia.fromUrl(meme.url))
    }

    
});


client.initialize();
