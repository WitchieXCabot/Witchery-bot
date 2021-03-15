const Discord = require('discord.js');

module.exports = {

    name: 'update',
    description: "this is a update embed",
    execute(message, args) {
        let update = new Discord.MessageEmbed()
        .setTitle('Developers say')
        .setDescription('Version 0.3.1 is released!!\
         -New command `Wcolor`\
         -Improved API and general Latency')
         .setColor("#D21F3C")
         .setTimestamp()
         .setFooter(`We hope you enjoy the update!`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        message.channel.send(update);
    }
}