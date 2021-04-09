const Discord = require ('discord.js');


module.exports = {

    name: 'oracle-info',
    description: "oracle info",
    usage: "Woracle-info",
    execute: async (message, args) => {
        let info =  new Discord.MessageEmbed()
            .setTitle('__Oracle Info__')
            .setDescription('An Oracle deck can essentially be whatever the creator of the deck wants it to be they pick how many cards are in it, what sorts of imagery itll use, and what purpose its supposed to serve. There are many different types of Oracle decks that come in all shapes, sizes, and functions. Oracle cards can be a variety of things, from affirmations to work with the elements to spiritual guides.')
            .setColor("#D21F3C")
            .addField('Deck', 'Deck used in `Woracle` is the **Candle Wisdom Oracle** and it has 27 cards and it is executable every 12 hours')
        message.channel.send(info);
    }
};