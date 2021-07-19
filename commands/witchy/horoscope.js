const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'horoscope',
    category: "witchy",
    description: "this is a help embed",
    aliases: ['horo', 'astro']
},
    run: async (bot, message, args) => {
                
        let help = new MessageEmbed()
        .setTitle('Full horoscope')
        .setThumbnail(message.author.displayAvatarURL ({ format: "png", dynamic: true }))
        .setColor("#D21F3C")
        .setTimestamp()
        .addField('commands', `
        Wcancer
        Wscorpio
        Wpisces
        Waries
        Wleo
        Wsagittarius
        Wtaurus
        Wvirgo
        Wcapricorn
        Wgemini
        Wlibra
        Waquarius`)
        .setFooter(`Have fun with me, I hope you learn alot | Whelp`, message.author.displayAvatarURL({ format: "png", dynamic: true }));

    message.channel.send(help)
    
    }
}