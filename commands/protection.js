const Discord = require('Discord.js');

module.exports = {

    name: 'protection',
    description: "this is a protection embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let protection = new Discord.MessageEmbed()
        .setTitle(' Protection herbs and plants')
        .setColor("#D21F3C")
        .setThumbnail(message.author.displayAvatarURL ({ format: "png", dynamic: true }))
        .setTimestamp()
        .addField(`♡*✧•`, `Agrimony
        Aloe
        Angelica
        Anise
        Asafoetida
        Basil
        Bay Leaf
        Benzoin
        Black Berry
        Black Pepper
        Blessed Thistle
        Caraway
        Carnation
        Catnip
        Cayenne
        Cedar
        Chamomile
        Cinnamon
        Clove
        Coriander
        Dandelion
        Dragons Blood
        Fennel
        Frankincense
        Garlic
        Hawthorn
        High John
        Holly
        Juniper
        Lavender
        Lilac
        Mistletoe
        Mugwort
        Mullein
        Myrrh
        Nettle
        Onion
        Parsley
        Pennyroyal
        Peppermint
        Rose petals + thorns
        Rosemary
        Sage
        Sandalwood
        St. John’s Wort
        Thyme
        Vervain
        Witch Hazel`)
        .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
        message.channel.send(protection);
    }
}