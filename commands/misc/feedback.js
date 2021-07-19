///BROKEN///

const { MessageEmbed } = require('discord.js');
const config = require('../../settings/config');
const log = require('../../settings/channels.json');

module.exports = {
config: {
    name: "feedback",
    category: "Misc",
    description: "To give us a feedback",
    category: "Misc",
    example: `${config.PREFIX}feedback Great Bot`,
},
    run: async (bot, message, args) => {

        const Channel = bot.channels.cache.get(log.Feedback);

        if(!args[0]) 
        return message.reply(`Please provide a feedback to send so that we can look through !! **\`${config.PREFIX}feedback [Your feedback]\`**`);

        let feedback = message.content.slice(message.content.indexOf(args[0]), message.content.length);

        const embed = new MessageEmbed()
        .setTitle('__Feedback__')
        .setColor("#D21F3C")
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setDescription(feedback) 
        .addField('User', `\`${message.member.user.tag}\` | \`${message.member.id}\``)
        .addField('Server', `\`${message.guild.name}\` | \`${message.guild.id}\``)
        .setTimestamp();

        Channel.send(embed)

        await message.channel.send(`You\`r feedback has been sent to my developer !!`);
    }
};