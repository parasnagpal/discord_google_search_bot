# Project Title

Google Search Bot for Discord.

## Description

This bot allows you to fetch top 5 results from a Google Custom Search and display the result in the chat. For Making a Google Search type : 
```
    !google "SEARCH PHRASE"
```
or type :
```
    !recent "CUSTOM PHRASE"
```
to match all the searches ever made via this bot which match the "CUSTOM PHRASE". 

To add this bot to your server click on [this link](https://discord.com/api/oauth2/authorize?client_id=714442190088044604&permissions=8&scope=bot) to grant permissions. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node.JS ^12.x.x


### Deployment

Follow these steps to deploy this on your local machine: <br/>
    1. Clone or download the zip file of the repository to your machine. <br/>
    2. Run *npm i* in the root of the directory. <br/>
    3. Create a .env file in the root of the directory.<br/>
    4. Add these environment variables to .env file. <br/>
       * *DISCORD_TOKEN* <br/>
         * A step by step procedure to setup a discord bot can be found [here](https://discord.com/developers/docs/topics/oauth2#bots)You can get DISCORD_TOKEN from https://discord.com/developers/applications/CLIENT_ID/bot <br/>
       * *GOOGLE_SEARCH_ENGINE_ID* <br/>
         * Create a Google Custom Search Engine. A step by step guide can be found [here](https://developers.google.com/custom-search/v1/ introduction)* <br/>
         * Do not add any websites to search. Just Make sure *Search the entire web* is selected. <br/>
         * Get this from [here](https://cse.google.com/cse/all) <br/>      
       * *GOOGLE_CUSTOM_SEARCH_API_KEY* <br/>
         * This can be found [here](https://developers.google.com/custom-search/v1/introduction) <br/>   

## Authors

* **Paras Nagpal**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

