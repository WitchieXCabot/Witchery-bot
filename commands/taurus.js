const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {

    name: 'taurus',
    description: "Daily horoscope embed",
    execute: async (message, args) => {     
        message.channel.send('<a:loading:841122743050698762> Loading...')
        .then(msg => {
                      msg.delete({ timeout: 900});
                  })
        .catch(console.error);
          
        const { horoscope, sign, date } = await fetch('https://ohmanda.com/api/horoscope/taurus/').then(response => response.json());

        let taurus = new Discord.MessageEmbed()
        .setTitle(sign)
        .setColor("#D21F3C")
        .setDescription(horoscope)
        .setThumbnail('http://www.astrology.com/images-US/signs/sign-taurus.png')
        .setFooter(date)
        message.channel.send(taurus);
    }
}