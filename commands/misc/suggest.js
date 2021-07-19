///BROKEN///

const Discord = require('discord.js');
const emoji = require('../../settings/emojis.json');
const config = require('../../settings/config');
const log = require('../../settings/channels.json');

module.exports = {
config: {
    name: "suggest",
    aliases: ["suggestion"],
    description: "To give us a suggestion !!",
    category: "Misc",
    example: `${config.PREFIX}suggest Add more commands`,
},
    run: async(bot, message, args) => {

        const Channel = bot.channels.cache.get(log.Suggestion);
        
        if(!args[0])
        return message.reply(`${emoji.Error} Please provide you suggestion so that we can look through **\`${config.PREFIX}suggest [Your Suggestion]\`**`)

        let suggestion = message.content.slice(message.content.indexOf(args[0]), message.content.length);

        const embed = new Discord.MessageEmbed()
        .setTitle('__Suggestion__')
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setDescription(suggestion)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp()
        .setColor("#D21F3C");

        Channel.send(embed);
        
        await message.channel.send(`You\`r suggestion has been sent to my developer !!`)
    }
}