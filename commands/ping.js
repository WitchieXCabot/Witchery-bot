const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {

    name: 'ping',
    description: "this is send you the uptime of the bot!",
    execute(message, args) { 
      message.channel.send("Pinging...").then(m =>{
          var ping = m.createdTimestamp - message.createdTimestamp;
          var yourping = new Date().getTime() - message.createdTimestamp

          var embed = new Discord.MessageEmbed()
          .setAuthor("Pong!")
          .setTitle(`Your ping is ${ping}`)
          .addField(`Api latency: ${yourping}`, `Looks alright :)`)
          .setColor("#D21F3C")
          
          m.edit(embed)
      });
  }
}