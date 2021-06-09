const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {

    name: 'ping',
    description: "this is send you the uptime of the bot!",
    execute(message, args) { 
      message.channel.send("Pinging...").then(m =>{
          var ping = m.createdTimestamp - message.createdTimestamp;
          var yourping = new Date().getTime() - message.createdTimestamp
          
          m.edit( `**Pong!**` + `\n` + `\n Your ping is ${ping}` + `\n` + `Api latency: ${yourping}` )
      });
  }
}