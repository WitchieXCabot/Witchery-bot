const Discord = require('discord.js');

module.exports = {

    name: 'tarot',
    description: "this is a help embed",
    execute: async (message, args) => {
        if (message.guild.id !== '793162542729134120' && message.guild.id !== '752356763268939876') return message.reply('This command can only be used in `2` server/s.')
        var rando = Math.floor(Math.random() * 13)

        if (rando == 1){
            let embed = new Discord.MessageEmbed()
              .setTitle('The Sun')
              .setDescription(`Meaning: joy, success, celebration, positivity`)
              .addField(`Deck`,`Court Games Tarot`)
              .setColor("#D21F3C")
              .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13914.jpg')
              .setFooter('**There are all possible meanings!**')
              .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 2){
            let embed = new Discord.MessageEmbed()
             .setTitle('The Magician')
             .setDescription(`Meaning: willpower, desire, creation, manifestation`)
             .addField(`Deck`, `Court Games Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13910.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 3){
            let embed = new Discord.MessageEmbed()
             .setTitle('The Tower')
             .setDescription(`Meaning: sudden upheaval, broken pride, disaster`)
             .addField(`Deck`, `Court Games Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13913.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 4){
            let embed = new Discord.MessageEmbed()
             .setTitle('Temprance')
             .setDescription(`Meaning: middle path, patience, finding meaning`)
             .addField(`Deck`, `Court Games Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/court-games-tarot-13912.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 5){
            let embed = new Discord.MessageEmbed()
             .setTitle('The Hierophant')
             .setDescription(`Meaning: tradition, conformity, morality, ethics`)
             .addField(`Deck`, `Animal Totem tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/animal-totem-tarot-13887.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 6){
            let embed = new Discord.MessageEmbed()
             .setTitle('Seven of pentacles')
             .setDescription(`Meaning: hard work, perseverance, diligence`)
             .addField( `Deck`, `Animal Totme tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/animal-totem-tarot-13892.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 7){
            let embed = new Discord.MessageEmbed()
             .setTitle('Strength')
             .setDescription(`Meaning: inner strength, bravery, compassion, focus`)
             .addField(`Deck`, `Forest of enchantment tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/forest-of-enchantment-tarot-15247.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 8){
            let embed = new Discord.MessageEmbed()
             .setTitle('The High Priestess')
             .setDescription(`Meaning: intuitive, unconscious, inner voice`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02565.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 9){
            let embed = new Discord.MessageEmbed()
             .setTitle('Death')
             .setDescription(`Meaning: end of cycle, beginnings, change, metamorphosis`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02566.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 10){
            let embed = new Discord.MessageEmbed()
             .setTitle('Four of Wands')
             .setDescription(`Meaning: community, home, celebration`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02568.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 11){
            let embed = new Discord.MessageEmbed()
             .setTitle('Ace of Swords')
             .setDescription(`Meaning: breakthrough, clarity, sharp mind`)
             .addField(`Deck`, `The Golden Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/golden-02567.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 12){
            let embed = new Discord.MessageEmbed()
             .setTitle('Hermit')
             .setDescription(`Meaning: contemplation, search for truth, inner guidance`)
             .addField(`Deck`, `Rider Waite Tarot`)
             .setColor("#D21F3C")
             .setImage('http://www.aeclectic.net/tarot/cards/_img/rider-waite-03678.jpg')
             .setFooter('**There are all possible meanings!**')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else if (rando == 13){
            let embed = new Discord.MessageEmbed()
             .setTitle('Judgment')
             .setDescription(`Meaning: reflection, reckoning, awakening`)
             .addField(`Deck`, `Jess Mac`)
             .setColor("#D21F3C")
             .setImage('https://media0.giphy.com/media/l49JCKQnEUqS0hxy8/giphy.gif?cid=ecf05e47gvl071qrozhn2x8cvpro10tf648i5tklvir5vkhe&rid=giphy.gif')
             .setFooter('Judge Judy :)')
             .setTimestamp()
            await message.channel.send(embed);
        }
        else{
            let embed = new Discord.MessageEmbed()
             .setTitle('Fool (**experimental embed**)')
             .setDescription(`General Meaning: Innocence, New Beginnings, Free Spirit`)
             .addField(`General reading:`,`The Fool is generally a positive card indicating new beginnings. If it appears in your readings it could mean that you are on the verge of an exciting, unexpected new adventure. Your new adventure will bring you along a path which may require you to make a leap of faith but you will grow as a result of this new experience. This new adventure could be a literal new adventure, like travelling to a place you’ve never been before. The change this card can bring will usually be a welcome one. While the Fool is generally a positive card, its appearance in a reading can also indicate that you need to take the time to look before you leap. `)
             .addField(`Deck`, `Burnt Wonderland Tarot`)
             .addField(`Yes/No`, `Yes`)
             .setColor("#D21F3C")
             .setImage('https://i.pinimg.com/736x/64/08/77/6408774811fe6acdeb936af114d17267.jpg')
             .setFooter('(** This is an experimental embed**)')
             .setTimestamp()
            await message.channel.send(embed);
        }
    }
};