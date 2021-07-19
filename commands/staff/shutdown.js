const Discord = require('discord.js');
const log = require('../../settings/channels.json');
const moment = require('moment');
const Config = require('../../settings/config');


module.exports = {
config: {
    name: "shutdown",
    aliases: ["turnoff"],
    description: "Shuts down the bot !!",
    category: "Staff",
    example: `${Config.PREFIX}shutdown`,
},
run: async(bot, message, args) => {
    
    if (message.author.id !== Config.OWNER_ID && message.author.id != "777305780503314442") {
        return;
    }

    if(!args[0]) 
    return message.reply(`Please provide a feedback to send so that we can look through !! **\`${config.PREFIX}feedback [Your feedback]\`**`);

    let reason = message.content.slice(message.content.indexOf(args[0]), message.content.length);

    const channel = bot.channels.cache.get(log.Shutdown);
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`__ShutDown!__`)
    .setDescription(`Witchery bot has been shutdown by ${message.author}`)
    .addField(`Reasoning: `, reason)
    .setTimestamp()
    .setColor(`#D21F3C`)
      
    if (channel) channel.send(embed);

    await message.channel.send(`Bot is now turned off !!`)
    process.exit()
    }
}