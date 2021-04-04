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

                await message.channel.send(dog).then( sent => {sent.react('🐶')});
            }
            else if (rando == 3){
                let bird = new Discord.MessageEmbed()
                .setTitle('bird')
                .setDescription('Birddddddd')
                
                await message.channel.send(bird).then( sent => {sent.react('🐦')});
            }
            else if (rando == 4){
                let cat = new Discord.MessageEmbed()
                .setTitle('cat')
                .setDescription('Cattttt')
                
                await message.channel.send(cat).then( sent => {sent.react('🐱')});
            }
            else if (rando == 5){
                let bear = new Discord.MessageEmbed()
                .setTitle('bear')
                .setDescription('BEarrrrrr')
                
                await message.channel.send(bear).then( sent => {sent.react('🐻')});
            }
            else if (rando == 6){
                let worm = new Discord.MessageEmbed()
                .setTitle('worm')
                .setDescription('Wormmmmm')
                
                await message.channel.send(worm).then( sent => {sent.react('🌈')});
            }
            else {
                let zebra = new Discord.MessageEmbed()
                .setTitle('zebra')
                .setDescription('Zebraaaaa')
                
                await message.channel.send(zebra).then( sent => {sent.react('🦓')});
                message.react('🦓');
            }
    }
};

