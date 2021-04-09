const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {

    name: 'taurus',
    description: "Daily horoscope embed",
    execute: async (message, args) => {        
        const { horoscope } = await fetch('https://ohmanda.com/api/horoscope/taurus/').then(response => response.json());
        const { sign } = await fetch('https://ohmanda.com/api/horoscope/taurus/').then(response => response.json());
        const { date } = await fetch('https://ohmanda.com/api/horoscope/taurus/').then(response => response.json());


        let taurus = new Discord.MessageEmbed()
        .setTitle(sign)
        .setColor("#D21F3C")
        .setDescription(horoscope)
        .setThumbnail('http://www.astrology.com/images-US/signs/sign-taurus.png')
        .setFooter(date)
        message.channel.send(taurus);
    }
}