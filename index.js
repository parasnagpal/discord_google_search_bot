const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client(); 

//Login handle
client.on('ready',()=>{
    console.log("Hello from "+client.user.tag);
})

client.on('message',msg=>{
    if(msg.content.startsWith('!google')){
        let str=msg.content.slice(7).trim();
        msg.reply("Searching for:"+str);
    }
})

client.login(process.env.DISCORD_TOKEN)