const Discord = require('Discord.js');

module.exports = {

    name: 'newmoon',
    description: "this is a new moons or 2021 embed",
    execute(message, args) {
        message.channel.send("Loading...");
        let newmoon = new Discord.MessageEmbed()
      .setTitle(' 2021 New moons ')
      .setColor("#D21F3C")
      .setThumbnail(message.author.displayAvatarURL ({ format: "png", dynamic: true }))
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
      .setFooter(`have fun with our bot, we hope you learn alot`, message.author.displayAvatarURL({ format: "png", dynamic: true }));
      message.channel.send(newmoon);
    }
}