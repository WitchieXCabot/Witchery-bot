const Discord = require('discord.js');


module.exports = {

    name: 'cleansing',
    description: "this is a cleansing embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let cleansing = new Discord.MessageEmbed()
        .setTitle(' Cleansing ')
        .setURL('https://discord.gg/jAfKPFS5FW')
        .setColor("#D21F3C")
        .setThumbnail(message.author.displayAvatarURL ({ format: "png", dynamic: true }))
        .setTimestamp()
        .addField(`————History————`, `~• Cleansing is a way or removing negative or unwanted energy, spirits and imprints from objects or a space. There are many simple rituals and actions that are done to cleanse. You can use as many or as few as you like and create you own cleansing methods/rituals.`)
        .addField(`————Yourself————`, `~• Brushing your hair in the morning
        ~• Ritual baths
        ~• Dancing
        ~• Singing
        ~• visualization
        ~• Drinking a tea with set intent`)
        .addField(`————Objects————`, `~• Bury in salt
        ~• If water compatible (not soluble, won't react poorly) let sit in salt water or moon water
        ~• Pass through: smoke, incense, rain water, mist , snow, ect.`)
        .addField(`Want more?`, `click on **Cleansing** above to enter our server for full information`)
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        
        message.channel.send(cleansing);
    }
}