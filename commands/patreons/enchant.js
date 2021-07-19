const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'enchant',
    category: "patreon",
    aliases: ['blessing', 'blessed'],
    description: "Witchery Blesses you - Patreon Only command",
},
    run: async (bot, message, args) => {

        if (message.member.roles.cache.some(role => role.name === 'Developer')) {

            const you = new MessageEmbed()
                .setTitle('Witchery Enchanted:')
                .setColor("#D21F3C")
                .addField('Witchery Has Enchanted:', `\`You\`!`)
                .setFooter(`You can use Wenchant <item> too!`)

            const item = args.join(' ');
            if (!item) 
            return message.reply(you);
        
        
            const embed = new MessageEmbed()
                .setTitle('Witchery Enchanted:')
                .setColor("#D21F3C")
                .addField('Witchery Has Enchanted:', `\`${item}\``)
            message.channel.send(embed);

        }
    }
}