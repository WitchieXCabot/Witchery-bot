const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'salt',
    category: "witchy",
    description: "Salt correspondences",
},
run: async (bot, message, args) => {

        if (message.guild.id === `793162542729134120`) {
            var salt =  new MessageEmbed()
            .setTitle(' Salt uses ')
            .setColor("#D21F3C")
            .setDescription(`__Himalayan salt__

            Properties:
            ~• Protects relationships
            ~• removes negative blackages and curses
            
            __RED SALT__

            Properties:
            ~• Home protection
            ~• Blocks nagative energies
            
            __CELTIC SEA SALT__

            Properties:
            ~• Protection
            ~• Attracts financial abundance

            __TABLE SALT__

            Properties:
            ~• Universal salt 
            ~• Great cleansing Properties
            
            __SEA SALT__

            Properties:
            ~• Purification
            ~• Cleansing
            ~• Helps balance emotions`)
            .setFooter('Remember to do your own extensive research!')

            message.channel.send(salt);

        }
        else { 
            var salt = new MessageEmbed()
            .setTitle(' Salt uses ')
            .setURL('https://discord.gg/6huDQTNexA')
            .setColor("#D21F3C")
            .addField(` ————Himalayan———— `, `~• Protects relationships
            ~• removes negative blackages and curses
            `)
            .addField(`————Celtic Sea————`, `~• Protection
            ~• Attracts financial abundance`)
            .addField(` ————Want more?———— `, `to get the full list join our server by clicking on **Salt uses**`)
            .setFooter('Remember to do your own extensive research!')

            message.channel.send(salt);
        }
    }
}
