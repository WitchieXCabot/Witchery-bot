const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {

    name: 'ping',
    description: "this is send you the uptime of the bot!",
    execute(message, args) { 
        // It sends the user "Pinging"
          message.channel.send("Pinging...").then(m =>{
            // The math thingy to calculate the user's ping
              var ping = m.createdTimestamp - message.createdTimestamp;
              var yourping = new Date().getTime() - message.createdTimestamp
  
            // Basic embed
              var embed = new Discord.MessageEmbed()
              .setAuthor(`Your ping is ${ping}`)
              .addField(`Api latency: ${yourping}`, `Looks alright :)`)
              .setColor("#D21F3C")
              
              // Then It Edits the message with the ping variable embed that you created
              m.edit(embed)
          });
      }
    }