const Discord = require('discord.js');

module.exports = {

    name: 'animal',
    description: "this is a help embed",
    execute: async (message, args) => {
        var rando = Math.floor(Math.random() * 7)
    
            if (rando == 1){
                let Panda = new Discord.MessageEmbed()
                .setTitle('Panda')
                .setDescription('pandaaaaaaaaa')

                await message.channel.send(Panda).then( sent => {sent.react('🐼')});
            }
            else if (rando == 2){
                let dog = new Discord.MessageEmbed()
                .setTitle('dog')
                .setDescription('DOggggg')

                await message.channel.send(dog);
                message.react('🐶');
            }
            else if (rando == 3){
                let bird = new Discord.MessageEmbed()
                .setTitle('bird')
                .setDescription('Birddddddd')
                
                await message.channel.send(bird);
                message.react('🐦');
            }
            else if (rando == 4){
                let cat = new Discord.MessageEmbed()
                .setTitle('cat')
                .setDescription('Cattttt')
                
                await message.channel.send(cat);
                message.react('🐱');
            }
            else if (rando == 5){
                let bear = new Discord.MessageEmbed()
                .setTitle('bear')
                .setDescription('BEarrrrrr')
                
                await message.channel.send(bear);
                message.react('🐻');
            }
            else if (rando == 6){
                let worm = new Discord.MessageEmbed()
                .setTitle('worm')
                .setDescription('Wormmmmm')
                
                await message.channel.send(worm);
                message.react('828163408246341662');
            }
            else {
                let zebra = new Discord.MessageEmbed()
                .setTitle('zebra')
                .setDescription('Zebraaaaa')
                
                await message.channel.send(zebra);
                message.react('🦓');
            }
    }
};

