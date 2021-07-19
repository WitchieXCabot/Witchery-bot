const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'bless',
    category: "patreon",
    aliases: ['blessing', 'blessed'],
    description: "Witchery Blesses you - Patreon Only command",
},
    run: async (bot, message, args) => {

        if (message.member.roles.cache.some(role => role.name === 'Developer')) {
            var num = [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
            var x = num[Math.floor(Math.random() * num.length)]

            const embed =  new MessageEmbed()
            .setTitle("Witchery Has blessed you!")
            .setDescription(`You have been blessed \`${x}\` times!`)
            .setThumbnail("https://gifimage.net/wp-content/uploads/2017/10/magic-wand-gif.gif")
            .setColor("#D21F3C")
            message.channel.send(embed);
        }
    }
}