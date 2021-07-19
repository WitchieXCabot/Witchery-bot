const Discord = require('discord.js')
const config = require('../../settings/config');
const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
config: {
    name: "leaveserver",
    aliases: ["leaveguild", "ls"],
    description: "Bot leaves the server but it's only for my developer",
    example: `${config.PREFIX}leaveServer [guildID]`,
    category: "Staff",
},
  run: async (bot, message, args) => {

  if(message.author.id != config.OWNER_ID && message.author.id != "777305780503314442") {
    const embed = new Discord.MessageEmbed().setColor('#FF00FF');
    if(!args[0]) {
        message.guild.leave()
    } else {
      let server = bot.guilds.cache.get(args[0]);
      server.leave()
    }
    message.channel.send(embed.setDescription('Successfully left the server!'));
      }
  }
}