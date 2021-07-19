///BROKEN///

const Discord = require('discord.js');
const emoji = require('../../settings/emojis.json');
const config = require('../../settings/config');
const log = require('../../settings/channels.json');

module.exports = {
config: {
    name: "report",
    category: "Misc",
    description: "To report us any bugs or anything !!",
    example: `${config.Prefix}report Bot is not working`,
},
    run: async (bot, message, args) => {
        
        const Channel = bot.channels.cache.get(log.Report);

        if(!args[0])
        return message.reply(`${emoji.Error} Please provide a report so that we can look through !! **\`${config.PREFIX}report [Your report]\`**`)

        let report = message.content.slice(message.content.indexOf(args[0]), message.content.length);

        const embed = new Discord.MessageEmbed()
        .setTitle('__Report__')
        .setColor("#D21F3C")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setDescription(report)
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp();

        Channel.send(embed);

        await message.channel.send(`you\`r report has been sent to my developer !!`)
    }
}