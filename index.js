const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client(); 

client.on('ready',()=>{
    console.log(client.user.tag);
})

client.on('message',msg=>{
    if(msg.content==='ping'){
        msg.reply('pong');
    }
})

console.log(process.env.HELO)

client.login(process.env.DISCORD_TOKEN)