const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {

    name: 'ping',
    description: "this is send you the uptime of the bot!",
    execute: async (message, args) => { 
      var ping = message.createdTimestamp - message.createdTimestamp;
      var yourping = new Date().getTime() - message.createdTimestamp

      var embed = new Discord.MessageEmbed()
      .setAuthor(`Pong!`)
      .setTitle(`Your ping is ${ping}`)
      .setDescription(`Api latency: ${yourping}`)
      .setColor("#D21F3C")
      
      await message.channel.send(embed)
  }
}