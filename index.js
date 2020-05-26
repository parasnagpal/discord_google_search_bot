const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client(); 
const axios= require('axios');
const {push_string_to_database,strings_like}=require('./database_operations')

//Login handle
client.on('ready',()=>{
    //Log a greeting message to console.
    console.log("Hello from "+client.user.tag);
})

client.on('message',msg=>{
    //identify if a search request is made
    if(msg.content.startsWith('!google')){
        //extract the required search string
        let str=msg.content.slice(7).trim();

        push_string_to_database(str);

        //Axios request to Google Custom Search API
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_CUSTOM_SEARCH_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${str}`)
        .then((search)=>{
            //create a new object of MessageEmbed and set properties
            const cse_embed= new Discord.MessageEmbed()
            .setColor('#000fff')
	        .setTitle("Search results for:"+str)
	        .setURL('https://google.com/')
	        .addFields(
                ...return_search_result(search.data.items)
	        )
            msg.channel.send(cse_embed)
        })
        .catch(e=>{
            //log any error during Google CSE request
            console.log(e);
            //send and error message
            msg.reply("Search Error");
        })
    }
    if(msg.content.startsWith('!recent')){
        let str=msg.content.slice(7).trim();
        function recent(){
            let recentSearches=strings_like(str);
            const cse_embed= new Discord.MessageEmbed()
            .setColor('#000fff')
	        .setTitle("Past results like:"+str)
	        .setURL('https://google.com/')
	        .addFields(
                ...return_recent_searches(recentSearches)
	        )
            msg.channel.send(cse_embed)
        }
        recent()
    }

})

function return_search_result(search_data){
    let cropped_data=search_data.slice(0,5);
    let display=[];
    cropped_data.map((result)=>{
        display.push({
            name:result.title,
            value:result.snippet+` [Click here](${result.link})`,
        }) 
    });
    return display;              
}

function return_recent_searches(string_array){
    let display=[];
    string_array.map((result,index)=>{
        display.push({
            name:index+1,
            value:result.searchString,
        })
    })
    return display
}

client.login(process.env.DISCORD_TOKEN)