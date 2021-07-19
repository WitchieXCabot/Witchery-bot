const { MessageEmbed } = require ('discord.js');


module.exports = {
config: {
    name: 'oracle-info',
    category: "witchy",
    aliases: ['whatisoracle', 'oraclei'],
    description: "oracle information",
    usage: "Woracle-info",
},
run: async (bot, message, args) => {
    let info =  new MessageEmbed()
            .setTitle('__Oracle Info__')
            .setDescription('An Oracle deck can essentially be whatever the creator of the deck wants it to be they pick how many cards are in it, what sorts of imagery itll use, and what purpose its supposed to serve. There are many different types of Oracle decks that come in all shapes, sizes, and functions. Oracle cards can be a variety of things, from affirmations to work with the elements to spiritual guides.')
            .setColor("#D21F3C")
            .addField('Deck', 'Deck used in `Woracle` is the **Candle Wisdom Oracle** and it has 27 cards and it is executable every 12 hours')
        message.channel.send(info);
    }
};