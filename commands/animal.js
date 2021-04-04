const Discord = require('discord.js');

module.exports = {

    name: 'animal',
    description: "this is a help embed",
    execute: async (message, args) => {
        var rando = Math.floor(Math.random() * 23)
    
            if (rando == 1){
                let Panda = new Discord.MessageEmbed()
                .setTitle('Panda')
                .setDescription('pandaaaaaaaaa')

                await message.channel.send(Panda).then( sent => {sent.react(':panda_face:')});
            }
            else if (rando == 2){
                let dog = new Discord.MessageEmbed()
                .setTitle('dog')

                await message.channel.send(dog);
                message.react('828162929890951178');
            }
            else if (rando == 2){
                let bird = new Discord.MessageEmbed()
                .setTitle('bird')
                
                await message.channel.send(bird);
                message.react('828162997892939776');
            }
            else if (rando == 2){
                let cat = new Discord.MessageEmbed()
                .setTitle('cat')
                
                await message.channel.send(cat);
                message.react('828163080797683712');
            }
            else if (rando == 2){
                let bear = new Discord.MessageEmbed()
                .setTitle('bear')
                
                await message.channel.send(bear);
                message.react('828163193637044234');
            }
            else if (rando == 2){
                let worm = new Discord.MessageEmbed()
                .setTitle('worm')
                
                await message.channel.send(worm);
                message.react('828163408246341662');
            }
            else if (rando == 2){
                let zebra = new Discord.MessageEmbed()
                .setTitle('zebra')
                
                await message.channel.send(zebra);
                message.react('828163483760721951');
            }
    }
};

