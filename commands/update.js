const Discord = require('discord.js');

module.exports = {

    name: 'update',
    description: "this is a update embed",
    execute(message, args) {
        let update = new Discord.MessageEmbed()
        .setTitle('Developers say')
        .setDescription(`Version 0.3.3 is released!!
         -Better divination 
            - commands added
                -**Woracle**
                -**W(horoscope)** Ex, Wgemini 
         -Improved API and general Latency
         -Help and witchy commands changes
            -**Woracle-info** added
            -Removal of member thumbnails in embeds
            -Smaller help embed
                -Removed moderation command list
                (All moderation commands are still on and usabel they just wont show on help)
        -Website and other source updates
            All websites have been updated with current info`)
         .setColor("#D21F3C")
         .setTimestamp()
         .setFooter(`We hope you enjoy the update!`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        message.channel.send(update);
    }
}