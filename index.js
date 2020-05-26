const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client(); 
const axios= require('axios');

//Login handle
client.on('ready',()=>{
    console.log("Hello from "+client.user.tag);
})

client.on('message',msg=>{
    if(msg.content.startsWith('!google')){
        let str=msg.content.slice(7).trim();
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${str}`)
        .then((search)=>{
            console.log(search.data.items[0].link)
            const cse_embed= new Discord.MessageEmbed()
            .setColor('#000fff')
	        .setTitle("Search results for:"+str)
	        .setURL('https://google.com/')
	        .setDescription('Search completed')
	        .addFields(
                ...return_search_result(search.data.items)
	        )
            
            msg.channel.send(cse_embed)
        })
        .catch(e=>{
            console.log(e)
            msg.reply("Search Error")
        })
    }
})

function return_search_result(search_data){
    let cropped_data=search_data.slice(0,5);
    let display=[]
    cropped_data.map((result)=>{
        display.push({
            name:result.title,
            value:result.snippet,
        }) 
    })
    return display              
}

client.login(process.env.DISCORD_TOKEN)