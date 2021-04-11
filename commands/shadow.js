const Discord = require('discord.js');

module.exports = {

    name: 'shadow',
    description: "this is a shadow embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let shadow = new Discord.MessageEmbed()
        .setTitle(' Shadow work ')
        .setColor("#D21F3C")
        .setTimestamp()
        .addField(`————What is is————`, `~•Shadow work is the process of exploring your inner shadow self or darkness.
        ~•Shadow work uncovers every part of you that you've concealed, rejected or disowned and it's a path to enlightenment. It helps us heal and it's uncovers things Ex. If you have anxiety it's will  show you how/where/when it started. It uncovers trauma to heal it, acknowledging and healing the not to good parts about us.`)
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        message.channel.send(shadow);
    }
}