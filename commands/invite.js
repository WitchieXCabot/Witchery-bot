const Discord = require('discord.js');

module.exports = {

    name: 'invite',
    description: "this is to invite us to your server",
    execute(message, args) {
            message.channel.send('My invite URL is: ```https://discord.com/oauth2/authorize?client_id=780341354379083797&scope=bot&permissions=8```');
    }
}