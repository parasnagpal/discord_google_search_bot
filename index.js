const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client(); 

//Login handle
client.on('ready',()=>{
    console.log("Hello from "+client.user.tag);
})

client.on('message',msg=>{
    console.log(msg);
})

client.login(process.env.DISCORD_TOKEN)