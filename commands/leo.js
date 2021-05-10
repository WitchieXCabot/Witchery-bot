const Discord = require('discord.js');
const fetch = require('node-fetch');


module.exports = {

    name: 'leo',
    description: "Daily horoscope embed",
    execute: async (message, args) => {     
        message.channel.send('<a:loading:841122743050698762> Loading...')
        .then(msg => {
                      msg.delete({ timeout: 900});
                  })
        .catch(console.error);
           
        const { horoscope } = await fetch('https://ohmanda.com/api/horoscope/leo/').then(response => response.json());
        const { sign } = await fetch('https://ohmanda.com/api/horoscope/leo/').then(response => response.json());
        const { date } = await fetch('https://ohmanda.com/api/horoscope/leo/').then(response => response.json());


        let leo = new Discord.MessageEmbed()
        .setTitle(sign)
        .setColor("#D21F3C")
        .setDescription(horoscope)
        .setThumbnail('http://www.astrology.com/images-US/signs/sign-leo.png')
        .setFooter(date)
        message.channel.send(leo);
    }
}