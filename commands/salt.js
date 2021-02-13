const Discord = require('Discord.js');

module.exports = {

    name: 'salt',
    description: "this is a salt embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let salt = new Discord.MessageEmbed()
        .setTitle(' Salt uses ')
        .setURL('https://discord.gg/jAfKPFS5FW')
        .setColor("#D21F3C")
        .setThumbnail(message.author.displayAvatarURL ({ format: "png", dynamic: true }))
        .setTimestamp()
        .addField(` ————Himalayan———— `, `~• Protects relationships
        ~• removes negative blackages and curses
        `)
        .addField(`————Celtic Sea————`, `~• Protection
        ~• Attracts financial abundance`)
        .addField(` ————Want more?———— `, `to get the full list join our server by clicking on **Salt uses**`)
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        message.channel.send(salt);
    }
}
