const { MessageEmbed } = require('discord.js');

module.exports = {
config: {
    name: 'newmoon',
    category: "witchy",
    aliases: ['nmoon', 'newm'],
    description: "this is a new moons or 2021 embed",
},
    run: async (bot, message, args) => {
        let newmoon = new MessageEmbed()
      .setTitle(' 2021 New moons ')
      .setColor("#D21F3C")
      .setTimestamp()
      .addField(` Names/Horoscopes `, `January 13 (in Capricorn)
      February 11 (in Aquarius)
      March 13 (in Pisces)
      April 12 (in Aries)
      May 11 (in Taurus)
      June 10 (in Gemini) SOLAR ECLIPSE!
      July 10 (in Cancer)
      August 8 (in Leo)
      September 7 (in Virgo)
      October 6 (in Libra)
      November 4 (in Scorpio)
      December 4 (in Sagittarius)`)
      .setFooter(`Have fun with me, I hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
      message.channel.send(newmoon);
    }
}