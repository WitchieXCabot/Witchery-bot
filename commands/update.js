const Discord = require('discord.js');

module.exports = {

    name: 'update',
    description: "this is a update embed",
    execute(message, args) {
        let update = new Discord.MessageEmbed()
        .setTitle('Developers say')
        .setDescription(`Version 0.3.0 is released!!
         -Bot source code was completely rebuilt 
         -Fixed Help command
         -Added commands;
          _Wrps_ - _Weightball_ - _Wms_ - _Wping_
         -Improved API and general Latency
         -Made commands handlers shorter and more easy to execute `)
         .addField(`This is our biggest update so far and we are happy to introduce it. Welcome a new and highly improved Witchery version 0.3.0!!!`)
         .setColor("#D21F3C")
         .setTimestamp()
         .setFooter(`We hope you enjoy the update!`);
        message.channel.send(update);
    }
}


