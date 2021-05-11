const Discord = require('discord.js');

module.exports = {

    name: 'horoscope',
    description: "this is a help embed",
    execute: async (message, args) => {
                
        let help = new Discord.MessageEmbed()
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
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));

       await message.channel.send(help)
    
    }
}