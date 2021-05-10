const Discord = require('discord.js');

module.exports = {

    name: 'update',
    description: "this is a update embed",
    execute(message, args) {
        let update = new Discord.MessageEmbed()
        .setTitle('Developers say!')
        .setDescription(`---------------------------------------------
        Updates:
            -Woracle is now mobile friendly
            -Woracle and Whorosope commands have been 
             edited for better user interaction.
            -Website and other sources have been 
             updated; witcherybot.xyz
        Coming ups:
            -Say goodbye to help command! We are 
             updated the help command to send in dm's 
             since the embed is quite big. We are 
             also changing some things up in the 
             embed so expect changes soon!
            -Extended divination
             We are adding a three card spread for 
             Woracle and We are adding a 3-5 rune 
             reading command. Bump up your divination 
             with witchery!
            -Did someone say Extended divination!? We  
             are adding a Fortune cookie command
            -We are just getting started expanding! 
             Expect a lot more to come!`)
         .setColor("#D21F3C")
         .setTimestamp()
         .setFooter(`Witchery©️ - 2021 Copyright©️
         Witchery Wonders™️ - 2021 LLC`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        message.channel.send(update);
    }
}